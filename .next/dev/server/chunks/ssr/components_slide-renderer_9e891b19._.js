module.exports = [
"[project]/components/slide-renderer/components/element/hooks/useElementShadow.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useElementShadow",
    ()=>useElementShadow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useElementShadow(shadow) {
    const shadowStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (shadow) {
            const { h, v, blur, color } = shadow;
            return `${h}px ${v}px ${blur}px ${color}`;
        }
        return '';
    }, [
        shadow
    ]);
    return {
        shadowStyle
    };
}
}),
"[project]/components/slide-renderer/components/element/hooks/useElementFlip.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useElementFlip",
    ()=>useElementFlip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useElementFlip(flipH, flipV) {
    const flipStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let style = '';
        if (flipH && flipV) style = 'rotateX(180deg) rotateY(180deg)';
        else if (flipV) style = 'rotateX(180deg)';
        else if (flipH) style = 'rotateY(180deg)';
        return style;
    }, [
        flipH,
        flipV
    ]);
    return {
        flipStyle
    };
}
}),
"[project]/components/slide-renderer/components/element/ImageElement/useClipImage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useClipImage",
    ()=>useClipImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$image$2d$clip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/image-clip.ts [app-ssr] (ecmascript)");
;
;
function useClipImage(element) {
    const clipShape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let _clipShape = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$image$2d$clip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLIPPATHS"].rect;
        if (element.clip) {
            const shape = element.clip.shape || __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$image$2d$clip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClipPathTypes"].RECT;
            _clipShape = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$image$2d$clip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLIPPATHS"][shape];
        }
        if (_clipShape.radius !== undefined && element.radius) {
            _clipShape = {
                ..._clipShape,
                radius: `${element.radius}px`,
                style: `inset(0 round ${element.radius}px)`
            };
        }
        return _clipShape;
    }, [
        element.clip,
        element.radius
    ]);
    const imgPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!element.clip || !element.clip.range) {
            return {
                top: '0',
                left: '0',
                width: '100%',
                height: '100%'
            };
        }
        const [start, end] = element.clip.range;
        const widthScale = (end[0] - start[0]) / 100;
        const heightScale = (end[1] - start[1]) / 100;
        const left = start[0] / widthScale;
        const top = start[1] / heightScale;
        return {
            left: -left + '%',
            top: -top + '%',
            width: 100 / widthScale + '%',
            height: 100 / heightScale + '%'
        };
    }, [
        element.clip
    ]);
    return {
        clipShape,
        imgPosition
    };
}
}),
"[project]/components/slide-renderer/components/element/ImageElement/useFilter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFilter",
    ()=>useFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useFilter(filters) {
    const filter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!filters) return '';
        let filterStr = '';
        for (const f of Object.values(filters)){
            filterStr += `${f.type}(${f.value}) `;
        }
        return filterStr.trim();
    }, [
        filters
    ]);
    return {
        filter
    };
}
}),
"[project]/components/slide-renderer/components/element/hooks/useElementOutline.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useElementOutline",
    ()=>useElementOutline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useElementOutline(outline) {
    const outlineWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>outline?.width ?? 0, [
        outline?.width
    ]);
    const outlineStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>outline?.style || 'solid', [
        outline?.style
    ]);
    const outlineColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>outline?.color || '#d14424', [
        outline?.color
    ]);
    const strokeDashArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const size = outlineWidth;
        if (outlineStyle === 'dashed') return size <= 6 ? `${size * 4.5} ${size * 2}` : `${size * 4} ${size * 1.5}`;
        if (outlineStyle === 'dotted') return size <= 6 ? `${size * 1.8} ${size * 1.6}` : `${size * 1.5} ${size * 1.2}`;
        return '0 0';
    }, [
        outlineWidth,
        outlineStyle
    ]);
    return {
        outlineWidth,
        outlineStyle,
        outlineColor,
        strokeDashArray
    };
}
}),
"[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/image-rect-outline.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageRectOutline",
    ()=>ImageRectOutline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementOutline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementOutline.ts [app-ssr] (ecmascript)");
'use client';
;
;
function ImageRectOutline({ width, height, outline, radius = '0' }) {
    const { outlineWidth, outlineColor, strokeDashArray } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementOutline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementOutline"])(outline);
    if (!outline) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "absolute top-0 left-0 z-[2] overflow-visible",
        width: width,
        height: height,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "butt",
            strokeMiterlimit: "8",
            fill: "transparent",
            rx: radius,
            ry: radius,
            width: width,
            height: height,
            stroke: outlineColor,
            strokeWidth: outlineWidth,
            strokeDasharray: strokeDashArray
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/image-rect-outline.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/image-rect-outline.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/image-ellipse-outline.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageEllipseOutline",
    ()=>ImageEllipseOutline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementOutline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementOutline.ts [app-ssr] (ecmascript)");
'use client';
;
;
function ImageEllipseOutline({ width, height, outline }) {
    const { outlineWidth, outlineColor, strokeDashArray } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementOutline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementOutline"])(outline);
    if (!outline) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "absolute top-0 left-0 z-[2] overflow-visible",
        width: width,
        height: height,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "butt",
            strokeMiterlimit: "8",
            fill: "transparent",
            cx: width / 2,
            cy: height / 2,
            rx: width / 2,
            ry: height / 2,
            stroke: outlineColor,
            strokeWidth: outlineWidth,
            strokeDasharray: strokeDashArray
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/image-ellipse-outline.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/image-ellipse-outline.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/image-polygon-outline.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImagePolygonOutline",
    ()=>ImagePolygonOutline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementOutline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementOutline.ts [app-ssr] (ecmascript)");
'use client';
;
;
function ImagePolygonOutline({ width, height, createPath, outline }) {
    const { outlineWidth, outlineColor, strokeDashArray } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementOutline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementOutline"])(outline);
    if (!outline) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "absolute top-0 left-0 z-[2] overflow-visible",
        width: width,
        height: height,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "butt",
            strokeMiterlimit: "8",
            fill: "transparent",
            d: createPath(width, height),
            stroke: outlineColor,
            strokeWidth: outlineWidth,
            strokeDasharray: strokeDashArray
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/image-polygon-outline.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/image-polygon-outline.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageOutline",
    ()=>ImageOutline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$useClipImage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ImageElement/useClipImage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$ImageOutline$2f$image$2d$rect$2d$outline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/image-rect-outline.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$ImageOutline$2f$image$2d$ellipse$2d$outline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/image-ellipse-outline.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$ImageOutline$2f$image$2d$polygon$2d$outline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/image-polygon-outline.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ImageOutline({ elementInfo }) {
    const { clipShape } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$useClipImage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClipImage"])(elementInfo);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "image-outline",
        children: [
            clipShape.type === 'rect' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$ImageOutline$2f$image$2d$rect$2d$outline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageRectOutline"], {
                width: elementInfo.width,
                height: elementInfo.height,
                radius: clipShape.radius,
                outline: elementInfo.outline
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/index.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this),
            clipShape.type === 'ellipse' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$ImageOutline$2f$image$2d$ellipse$2d$outline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageEllipseOutline"], {
                width: elementInfo.width,
                height: elementInfo.height,
                outline: elementInfo.outline
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/index.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this),
            clipShape.type === 'polygon' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$ImageOutline$2f$image$2d$polygon$2d$outline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImagePolygonOutline"], {
                width: elementInfo.width,
                height: elementInfo.height,
                outline: elementInfo.outline,
                createPath: clipShape.createPath
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/index.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/index.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseImageElement",
    ()=>BaseImageElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementShadow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementShadow.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementFlip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementFlip.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$useClipImage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ImageElement/useClipImage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$useFilter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ImageElement/useFilter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$ImageOutline$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/media-generation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/settings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$media$2d$stage$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contexts/media-stage-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$media$2f$media$2d$orchestrator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/media/media-orchestrator.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-ssr] (ecmascript) <export default as Paintbrush>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-ssr] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageOff$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/image-off.js [app-ssr] (ecmascript) <export default as ImageOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-i18n.tsx [app-ssr] (ecmascript)");
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
function BaseImageElement({ elementInfo }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const { shadowStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementShadow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementShadow"])(elementInfo.shadow);
    const { flipStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementFlip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementFlip"])(elementInfo.flipH, elementInfo.flipV);
    const { clipShape, imgPosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$useClipImage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClipImage"])(elementInfo);
    const { filter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$useFilter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFilter"])(elementInfo.filters);
    // Only subscribe to media store when inside a classroom (stageId provided via context).
    // Homepage thumbnails have no stageId context → skip store to prevent cross-course contamination.
    const stageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$media$2d$stage$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaStageId"])();
    const isPlaceholder = !!stageId && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMediaPlaceholder"])(elementInfo.src);
    const task = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"])((s)=>{
        if (!isPlaceholder) return undefined;
        const t = s.tasks[elementInfo.src];
        // Only use task if it belongs to the current stage
        if (t && t.stageId !== stageId) return undefined;
        return t;
    });
    const imageGenerationEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((s)=>s.imageGenerationEnabled);
    // Resolve actual src: use objectUrl from store if available, otherwise original src
    const resolvedSrc = task?.status === 'done' && task.objectUrl ? task.objectUrl : elementInfo.src;
    const showDisabled = isPlaceholder && !task && !imageGenerationEnabled;
    const showSkeleton = isPlaceholder && !showDisabled && (!task || task.status === 'pending' || task.status === 'generating');
    const showError = isPlaceholder && task?.status === 'failed';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute",
        style: {
            top: `${elementInfo.top}px`,
            left: `${elementInfo.left}px`,
            width: `${elementInfo.width}px`,
            height: `${elementInfo.height}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full",
            style: {
                transform: `rotate(${elementInfo.rotate}deg)`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full relative",
                style: {
                    filter: shadowStyle ? `drop-shadow(${shadowStyle})` : '',
                    transform: flipStyle
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$ImageOutline$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageOutline"], {
                        elementInfo: elementInfo
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full overflow-hidden relative",
                        style: {
                            clipPath: clipShape.style
                        },
                        children: showDisabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full bg-gray-50 dark:bg-gray-900/30 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-gray-500 dark:text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageOff$3e$__["ImageOff"], {
                                        className: "w-3 h-3 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                                        lineNumber: 79,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('settings.mediaGenerationDisabled')
                                    }, void 0, false, {
                                        fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                                        lineNumber: 80,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                                lineNumber: 78,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                            lineNumber: 77,
                            columnNumber: 15
                        }, this) : showSkeleton ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full bg-gradient-to-br from-amber-50 via-orange-50/60 to-yellow-50 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-yellow-950/20 flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                    children: `
                  @keyframes img-pulse-ring { 0%, 100% { opacity: 0.15; transform: scale(0.85); } 50% { opacity: 0.35; transform: scale(1.1); } }
                `
                                }, void 0, false, {
                                    fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                                    lineNumber: 85,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-12 h-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 rounded-full border-2 border-amber-300/40 dark:border-amber-500/30",
                                            style: {
                                                animation: 'img-pulse-ring 2.4s ease-in-out infinite'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                                            lineNumber: 89,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"], {
                                            className: "absolute inset-0 m-auto w-5 h-5 text-amber-400/80 dark:text-amber-500/70",
                                            strokeWidth: 1.5
                                        }, void 0, false, {
                                            fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                                    lineNumber: 88,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                            lineNumber: 84,
                            columnNumber: 15
                        }, this) : showError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full bg-red-50 dark:bg-red-900/20 flex flex-col items-center justify-center gap-1.5",
                            children: task?.errorCode === 'CONTENT_SENSITIVE' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-amber-600 dark:text-amber-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                        className: "w-3 h-3 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                                        lineNumber: 105,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('settings.mediaContentSensitive')
                                    }, void 0, false, {
                                        fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                                        lineNumber: 106,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                                lineNumber: 104,
                                columnNumber: 19
                            }, this) : task?.errorCode === 'GENERATION_DISABLED' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-gray-500 dark:text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageOff$3e$__["ImageOff"], {
                                        className: "w-3 h-3 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                                        lineNumber: 110,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('settings.mediaGenerationDisabled')
                                    }, void 0, false, {
                                        fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                                        lineNumber: 111,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                                lineNumber: 109,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$media$2f$media$2d$orchestrator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retryMediaTask"])(elementInfo.src);
                                },
                                onPointerDown: (e)=>e.stopPropagation(),
                                className: "flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/40 rounded hover:bg-red-200 dark:hover:bg-red-900/60 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                                        lineNumber: 122,
                                        columnNumber: 21
                                    }, this),
                                    t('settings.mediaRetry')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                                lineNumber: 114,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                            lineNumber: 102,
                            columnNumber: 15
                        }, this) : resolvedSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: resolvedSrc,
                                    draggable: false,
                                    style: {
                                        position: 'absolute',
                                        top: imgPosition.top,
                                        left: imgPosition.left,
                                        width: imgPosition.width,
                                        height: imgPosition.height,
                                        filter
                                    },
                                    alt: "",
                                    onDragStart: (e)=>e.preventDefault()
                                }, void 0, false, {
                                    fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, this),
                                elementInfo.colorMask && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0",
                                    style: {
                                        backgroundColor: elementInfo.colorMask
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                                    lineNumber: 144,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true) : null
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/ElementOutline.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElementOutline",
    ()=>ElementOutline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementOutline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementOutline.ts [app-ssr] (ecmascript)");
'use client';
;
;
function ElementOutline({ width, height, outline }) {
    const { outlineWidth, outlineColor, strokeDashArray } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementOutline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementOutline"])(outline);
    if (!outline) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "element-outline absolute top-0 left-0 overflow-visible",
        width: width,
        height: height,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            vectorEffect: "non-scaling-stroke",
            strokeLinecap: "butt",
            strokeMiterlimit: "8",
            fill: "transparent",
            d: `M0,0 L${width},0 L${width},${height} L0,${height} Z`,
            stroke: outlineColor,
            strokeWidth: outlineWidth,
            strokeDasharray: strokeDashArray
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/ElementOutline.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/ElementOutline.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/TextElement/BaseTextElement.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseTextElement",
    ()=>BaseTextElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementShadow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementShadow.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ElementOutline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ElementOutline.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function BaseTextElement({ elementInfo, target }) {
    const { shadowStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementShadow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementShadow"])(elementInfo.shadow);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "base-element-text absolute",
        style: {
            top: `${elementInfo.top}px`,
            left: `${elementInfo.left}px`,
            width: `${elementInfo.width}px`,
            height: `${elementInfo.height}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rotate-wrapper w-full h-full",
            style: {
                transform: `rotate(${elementInfo.rotate}deg)`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "element-content relative p-[10px] leading-[1.5] break-words",
                style: {
                    width: elementInfo.vertical ? 'auto' : `${elementInfo.width}px`,
                    height: elementInfo.vertical ? `${elementInfo.height}px` : 'auto',
                    backgroundColor: elementInfo.fill,
                    opacity: elementInfo.opacity,
                    textShadow: shadowStyle,
                    lineHeight: elementInfo.lineHeight,
                    letterSpacing: `${elementInfo.wordSpace || 0}px`,
                    color: elementInfo.defaultColor,
                    fontFamily: elementInfo.defaultFontName,
                    writingMode: elementInfo.vertical ? 'vertical-rl' : 'horizontal-tb',
                    // @ts-expect-error - CSS custom property
                    '--paragraphSpace': `${elementInfo.paragraphSpace === undefined ? 5 : elementInfo.paragraphSpace}px`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ElementOutline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementOutline"], {
                        width: elementInfo.width,
                        height: elementInfo.height,
                        outline: elementInfo.outline
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/TextElement/BaseTextElement.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text ProseMirror-static relative ${target === 'thumbnail' ? 'pointer-events-none' : ''}`,
                        dangerouslySetInnerHTML: {
                            __html: elementInfo.content
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/TextElement/BaseTextElement.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/slide-renderer/components/element/TextElement/BaseTextElement.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/TextElement/BaseTextElement.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/TextElement/BaseTextElement.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/hooks/useElementFill.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useElementFill",
    ()=>useElementFill
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useElementFill(element, source) {
    const fill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (element.pattern) return `url(#${source}-pattern-${element.id})`;
        if (element.gradient) return `url(#${source}-gradient-${element.id})`;
        return element.fill || 'none';
    }, [
        element.pattern,
        element.gradient,
        element.fill,
        element.id,
        source
    ]);
    return {
        fill
    };
}
}),
"[project]/components/slide-renderer/components/element/ShapeElement/GradientDefs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GradientDefs",
    ()=>GradientDefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function GradientDefs({ id, type, colors, rotate = 0 }) {
    if (type === 'linear') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
            id: id,
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "0%",
            gradientTransform: `rotate(${rotate},0.5,0.5)`,
            children: colors.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                    offset: `${item.pos}%`,
                    stopColor: item.color
                }, index, false, {
                    fileName: "[project]/components/slide-renderer/components/element/ShapeElement/GradientDefs.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/ShapeElement/GradientDefs.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
        id: id,
        children: colors.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                offset: `${item.pos}%`,
                stopColor: item.color
            }, index, false, {
                fileName: "[project]/components/slide-renderer/components/element/ShapeElement/GradientDefs.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/ShapeElement/GradientDefs.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/ShapeElement/PatternDefs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PatternDefs",
    ()=>PatternDefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function PatternDefs({ id, src }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
        id: id,
        patternContentUnits: "objectBoundingBox",
        patternUnits: "objectBoundingBox",
        width: "1",
        height: "1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
            href: src,
            width: "1",
            height: "1",
            preserveAspectRatio: "xMidYMid slice"
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/ShapeElement/PatternDefs.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/ShapeElement/PatternDefs.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/ShapeElement/BaseShapeElement.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseShapeElement",
    ()=>BaseShapeElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementOutline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementOutline.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementShadow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementShadow.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementFlip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementFlip.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementFill$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementFill.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ShapeElement$2f$GradientDefs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ShapeElement/GradientDefs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ShapeElement$2f$PatternDefs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ShapeElement/PatternDefs.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function BaseShapeElement({ elementInfo }) {
    const { fill } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementFill$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementFill"])(elementInfo, 'base');
    const { outlineWidth, outlineColor, strokeDashArray } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementOutline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementOutline"])(elementInfo.outline);
    const { shadowStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementShadow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementShadow"])(elementInfo.shadow);
    const { flipStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementFlip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementFlip"])(elementInfo.flipH, elementInfo.flipV);
    const text = elementInfo.text || {
        content: '',
        align: 'middle',
        defaultFontName: 'Microsoft YaHei',
        defaultColor: '#333333'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "base-element-shape absolute",
        style: {
            top: `${elementInfo.top}px`,
            left: `${elementInfo.left}px`,
            width: `${elementInfo.width}px`,
            height: `${elementInfo.height}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rotate-wrapper w-full h-full",
            style: {
                transform: `rotate(${elementInfo.rotate}deg)`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "element-content relative w-full h-full",
                style: {
                    opacity: elementInfo.opacity,
                    filter: shadowStyle ? `drop-shadow(${shadowStyle})` : '',
                    transform: flipStyle,
                    color: text.defaultColor,
                    fontFamily: text.defaultFontName
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        overflow: "visible",
                        width: elementInfo.width,
                        height: elementInfo.height,
                        className: "transform-origin-[0_0] overflow-visible block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: [
                                    elementInfo.pattern && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ShapeElement$2f$PatternDefs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PatternDefs"], {
                                        id: `base-pattern-${elementInfo.id}`,
                                        src: elementInfo.pattern
                                    }, void 0, false, {
                                        fileName: "[project]/components/slide-renderer/components/element/ShapeElement/BaseShapeElement.tsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this),
                                    elementInfo.gradient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ShapeElement$2f$GradientDefs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GradientDefs"], {
                                        id: `base-gradient-${elementInfo.id}`,
                                        type: elementInfo.gradient.type,
                                        colors: elementInfo.gradient.colors,
                                        rotate: elementInfo.gradient.rotate
                                    }, void 0, false, {
                                        fileName: "[project]/components/slide-renderer/components/element/ShapeElement/BaseShapeElement.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/slide-renderer/components/element/ShapeElement/BaseShapeElement.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                transform: `scale(${elementInfo.width / elementInfo.viewBox[0]}, ${elementInfo.height / elementInfo.viewBox[1]}) translate(0,0) matrix(1,0,0,1,0,0)`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    vectorEffect: "non-scaling-stroke",
                                    strokeLinecap: "butt",
                                    strokeMiterlimit: "8",
                                    d: elementInfo.path,
                                    fill: fill,
                                    stroke: outlineColor,
                                    strokeWidth: outlineWidth,
                                    strokeDasharray: strokeDashArray
                                }, void 0, false, {
                                    fileName: "[project]/components/slide-renderer/components/element/ShapeElement/BaseShapeElement.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/slide-renderer/components/element/ShapeElement/BaseShapeElement.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/slide-renderer/components/element/ShapeElement/BaseShapeElement.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `shape-text flex flex-col px-2.5 py-2.5 leading-relaxed break-words absolute inset-0 ${text.align === 'top' ? 'justify-start' : text.align === 'bottom' ? 'justify-end' : 'justify-center'}`,
                        style: {
                            lineHeight: text.lineHeight,
                            letterSpacing: `${text.wordSpace || 0}px`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ProseMirror-static [&_p]:mb-[var(--paragraphSpace)]",
                            style: {
                                // @ts-expect-error CSS custom properties
                                '--paragraphSpace': `${text.paragraphSpace === undefined ? 5 : text.paragraphSpace}px`
                            },
                            dangerouslySetInnerHTML: {
                                __html: text.content
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/components/element/ShapeElement/BaseShapeElement.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/ShapeElement/BaseShapeElement.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/slide-renderer/components/element/ShapeElement/BaseShapeElement.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/ShapeElement/BaseShapeElement.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/ShapeElement/BaseShapeElement.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/LineElement/LinePointMarker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinePointMarker",
    ()=>LinePointMarker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const pathMap = {
    dot: 'm0 5a5 5 0 1 0 10 0a5 5 0 1 0 -10 0z',
    arrow: 'M0,0 L10,5 0,10 Z'
};
const rotateMap = {
    'arrow-start': 180,
    'arrow-end': 0
};
function LinePointMarker({ id, position, type, baseSize, color }) {
    const path = pathMap[type];
    const rotate = rotateMap[`${type}-${position}`] || 0;
    const size = baseSize < 2 ? 2 : baseSize;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
        id: `${id}-${type}-${position}`,
        markerUnits: "userSpaceOnUse",
        orient: "auto",
        markerWidth: size * 3,
        markerHeight: size * 3,
        refX: size * 1.5,
        refY: size * 1.5,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: path,
            fill: color,
            transform: `scale(${size * 0.3}, ${size * 0.3}) rotate(${rotate}, 5, 5)`
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/LineElement/LinePointMarker.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/LineElement/LinePointMarker.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/LineElement/BaseLineElement.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseLineElement",
    ()=>BaseLineElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/element.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementShadow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementShadow.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LineElement$2f$LinePointMarker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/LineElement/LinePointMarker.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
/** Duration of the stroke-drawing animation in ms */ const DRAW_ANIMATION_MS = 600;
function BaseLineElement({ elementInfo, animate }) {
    const { shadowStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementShadow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementShadow"])(elementInfo.shadow);
    const pathRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [drawComplete, setDrawComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!animate);
    const svgWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const width = Math.abs(elementInfo.start[0] - elementInfo.end[0]);
        return width < 24 ? 24 : width;
    }, [
        elementInfo.start,
        elementInfo.end
    ]);
    const svgHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const height = Math.abs(elementInfo.start[1] - elementInfo.end[1]);
        return height < 24 ? 24 : height;
    }, [
        elementInfo.start,
        elementInfo.end
    ]);
    const lineDashArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const size = elementInfo.width;
        if (elementInfo.style === 'dashed') return size <= 8 ? `${size * 5} ${size * 2.5}` : `${size * 5} ${size * 1.5}`;
        if (elementInfo.style === 'dotted') return size <= 8 ? `${size * 1.8} ${size * 1.6}` : `${size * 1.5} ${size * 1.2}`;
        return '0 0';
    }, [
        elementInfo.width,
        elementInfo.style
    ]);
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLineElementPath"])(elementInfo);
    }, [
        elementInfo
    ]);
    // Stroke-drawing animation on mount (whiteboard only)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!animate) return;
        const pathEl = pathRef.current;
        if (!pathEl) return;
        const length = pathEl.getTotalLength();
        if (length === 0) {
            // Zero-length path — skip animation, reveal markers on next tick
            const t = setTimeout(()=>setDrawComplete(true), 0);
            return ()=>clearTimeout(t);
        }
        // Initial state: line fully hidden via dash offset
        pathEl.style.strokeDasharray = `${length}`;
        pathEl.style.strokeDashoffset = `${length}`;
        pathEl.style.transition = 'none';
        // Force reflow so the browser registers the initial state
        pathEl.getBoundingClientRect();
        // Animate: draw the line from start to end
        pathEl.style.transition = `stroke-dashoffset ${DRAW_ANIMATION_MS}ms ease-out`;
        pathEl.style.strokeDashoffset = '0';
        // After animation, restore the original dash style (for dashed/dotted lines)
        // and show endpoint markers
        const timer = setTimeout(()=>{
            pathEl.style.transition = 'none';
            pathEl.style.strokeDasharray = '';
            pathEl.style.strokeDashoffset = '';
            setDrawComplete(true);
        }, DRAW_ANIMATION_MS + 50);
        return ()=>clearTimeout(timer);
    }, [
        animate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "base-element-line absolute",
        style: {
            top: `${elementInfo.top}px`,
            left: `${elementInfo.left}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "element-content relative w-full h-full",
            style: {
                filter: shadowStyle ? `drop-shadow(${shadowStyle})` : ''
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                overflow: "visible",
                width: svgWidth,
                height: svgHeight,
                className: "transform-origin-[0_0] overflow-visible",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            elementInfo.points[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LineElement$2f$LinePointMarker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinePointMarker"], {
                                id: elementInfo.id,
                                position: "start",
                                type: elementInfo.points[0],
                                color: elementInfo.color,
                                baseSize: elementInfo.width
                            }, void 0, false, {
                                fileName: "[project]/components/slide-renderer/components/element/LineElement/BaseLineElement.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this),
                            elementInfo.points[1] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LineElement$2f$LinePointMarker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinePointMarker"], {
                                id: elementInfo.id,
                                position: "end",
                                type: elementInfo.points[1],
                                color: elementInfo.color,
                                baseSize: elementInfo.width
                            }, void 0, false, {
                                fileName: "[project]/components/slide-renderer/components/element/LineElement/BaseLineElement.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/slide-renderer/components/element/LineElement/BaseLineElement.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        ref: pathRef,
                        d: path,
                        stroke: elementInfo.color,
                        strokeWidth: elementInfo.width,
                        strokeDasharray: lineDashArray,
                        fill: "none",
                        markerStart: drawComplete && elementInfo.points[0] ? `url(#${elementInfo.id}-${elementInfo.points[0]}-start)` : '',
                        markerEnd: drawComplete && elementInfo.points[1] ? `url(#${elementInfo.id}-${elementInfo.points[1]}-end)` : ''
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/LineElement/BaseLineElement.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/slide-renderer/components/element/LineElement/BaseLineElement.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/LineElement/BaseLineElement.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/LineElement/BaseLineElement.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/ChartElement/chartOption.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getChartOption",
    ()=>getChartOption
]);
const getChartOption = ({ type, data, themeColors, textColor, lineColor, lineSmooth, stack })=>{
    const textStyle = textColor ? {
        color: textColor
    } : {};
    const axisLine = textColor ? {
        lineStyle: {
            color: textColor
        }
    } : undefined;
    const axisLabel = textColor ? {
        color: textColor
    } : undefined;
    const splitLine = lineColor ? {
        lineStyle: {
            color: lineColor
        }
    } : {};
    const legend = data.series.length > 1 ? {
        top: 'bottom',
        textStyle
    } : undefined;
    if (type === 'bar') {
        return {
            color: themeColors,
            textStyle,
            legend,
            xAxis: {
                type: 'category',
                data: data.labels,
                axisLine,
                axisLabel
            },
            yAxis: {
                type: 'value',
                axisLine,
                axisLabel,
                splitLine
            },
            series: data.series.map((item, index)=>{
                const seriesItem = {
                    data: item,
                    name: data.legends[index],
                    type: 'bar',
                    label: {
                        show: true
                    },
                    itemStyle: {
                        borderRadius: [
                            2,
                            2,
                            0,
                            0
                        ]
                    }
                };
                if (stack) seriesItem.stack = 'A';
                return seriesItem;
            })
        };
    }
    if (type === 'column') {
        return {
            color: themeColors,
            textStyle,
            legend,
            yAxis: {
                type: 'category',
                data: data.labels,
                axisLine,
                axisLabel
            },
            xAxis: {
                type: 'value',
                axisLine,
                axisLabel,
                splitLine
            },
            series: data.series.map((item, index)=>{
                const seriesItem = {
                    data: item,
                    name: data.legends[index],
                    type: 'bar',
                    label: {
                        show: true
                    },
                    itemStyle: {
                        borderRadius: [
                            0,
                            2,
                            2,
                            0
                        ]
                    }
                };
                if (stack) seriesItem.stack = 'A';
                return seriesItem;
            })
        };
    }
    if (type === 'line') {
        return {
            color: themeColors,
            textStyle,
            legend,
            xAxis: {
                type: 'category',
                data: data.labels,
                axisLine,
                axisLabel
            },
            yAxis: {
                type: 'value',
                axisLine,
                axisLabel,
                splitLine
            },
            series: data.series.map((item, index)=>{
                const seriesItem = {
                    data: item,
                    name: data.legends[index],
                    type: 'line',
                    smooth: lineSmooth,
                    label: {
                        show: true
                    }
                };
                if (stack) seriesItem.stack = 'A';
                return seriesItem;
            })
        };
    }
    if (type === 'pie') {
        return {
            color: themeColors,
            textStyle,
            legend: {
                top: 'bottom',
                textStyle
            },
            series: [
                {
                    data: data.series[0].map((item, index)=>({
                            value: item,
                            name: data.labels[index]
                        })),
                    label: textColor ? {
                        color: textColor
                    } : {},
                    type: 'pie',
                    radius: '70%',
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        label: {
                            show: true,
                            fontSize: 14,
                            fontWeight: 'bold'
                        }
                    }
                }
            ]
        };
    }
    if (type === 'ring') {
        return {
            color: themeColors,
            textStyle,
            legend: {
                top: 'bottom',
                textStyle
            },
            series: [
                {
                    data: data.series[0].map((item, index)=>({
                            value: item,
                            name: data.labels[index]
                        })),
                    label: textColor ? {
                        color: textColor
                    } : {},
                    type: 'pie',
                    radius: [
                        '40%',
                        '70%'
                    ],
                    padAngle: 1,
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 4
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 14,
                            fontWeight: 'bold'
                        }
                    }
                }
            ]
        };
    }
    if (type === 'area') {
        return {
            color: themeColors,
            textStyle,
            legend,
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: data.labels,
                axisLine,
                axisLabel
            },
            yAxis: {
                type: 'value',
                axisLine,
                axisLabel,
                splitLine
            },
            series: data.series.map((item, index)=>{
                const seriesItem = {
                    data: item,
                    name: data.legends[index],
                    type: 'line',
                    areaStyle: {},
                    label: {
                        show: true
                    }
                };
                if (stack) seriesItem.stack = 'A';
                return seriesItem;
            })
        };
    }
    if (type === 'radar') {
        // Display is broken without max in indicator; setting max triggers console warnings. No workaround — waiting for ECharts to fix this bug
        // const values: number[] = []
        // for (const item of data.series) {
        //   values.push(...item)
        // }
        // const max = Math.max(...values)
        return {
            color: themeColors,
            textStyle,
            legend,
            radar: {
                indicator: data.labels.map((item)=>({
                        name: item
                    })),
                splitLine,
                axisLine: lineColor ? {
                    lineStyle: {
                        color: lineColor
                    }
                } : undefined
            },
            series: [
                {
                    data: data.series.map((item, index)=>({
                            value: item,
                            name: data.legends[index]
                        })),
                    type: 'radar'
                }
            ]
        };
    }
    if (type === 'scatter') {
        const formatedData = [];
        for(let i = 0; i < data.series[0].length; i++){
            const x = data.series[0][i];
            const y = data.series[1] ? data.series[1][i] : x;
            formatedData.push([
                x,
                y
            ]);
        }
        return {
            color: themeColors,
            textStyle,
            xAxis: {
                axisLine,
                axisLabel,
                splitLine
            },
            yAxis: {
                axisLine,
                axisLabel,
                splitLine
            },
            series: [
                {
                    symbolSize: 12,
                    data: formatedData,
                    type: 'scatter'
                }
            ]
        };
    }
    return null;
};
}),
"[project]/components/slide-renderer/components/element/ChartElement/Chart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chart",
    ()=>Chart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tinycolor2@1.6.0/node_modules/tinycolor2/esm/tinycolor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ChartElement$2f$chartOption$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ChartElement/chartOption.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/echarts.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__install__as__BarChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/bar/install.js [app-ssr] (ecmascript) <export install as BarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__install__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/line/install.js [app-ssr] (ecmascript) <export install as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__install__as__PieChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/pie/install.js [app-ssr] (ecmascript) <export install as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$scatter$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__install__as__ScatterChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/scatter/install.js [app-ssr] (ecmascript) <export install as ScatterChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$radar$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__install__as__RadarChart$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/radar/install.js [app-ssr] (ecmascript) <export install as RadarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__install__as__LegendComponent$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/install.js [app-ssr] (ecmascript) <export install as LegendComponent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installSVGRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__install__as__SVGRenderer$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/renderer/installSVGRenderer.js [app-ssr] (ecmascript) <export install as SVGRenderer>");
'use client';
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$extension$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"]([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$bar$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__install__as__BarChart$3e$__["BarChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$line$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__install__as__LineChart$3e$__["LineChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$pie$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__install__as__PieChart$3e$__["PieChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$scatter$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__install__as__ScatterChart$3e$__["ScatterChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$chart$2f$radar$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__install__as__RadarChart$3e$__["RadarChart"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$component$2f$legend$2f$install$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__install__as__LegendComponent$3e$__["LegendComponent"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$renderer$2f$installSVGRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__install__as__SVGRenderer$3e$__["SVGRenderer"]
]);
function Chart({ width: _width, height: _height, type, data, themeColors: rawThemeColors, textColor, lineColor, options }) {
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chartInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Generate theme colors
    const themeColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let colors = [];
        if (rawThemeColors.length >= 10) {
            colors = rawThemeColors;
        } else if (rawThemeColors.length === 1) {
            colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(rawThemeColors[0]).analogous(10).map((color)=>color.toRgbString());
        } else {
            const len = rawThemeColors.length;
            const supplement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tinycolor2$40$1$2e$6$2e$0$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(rawThemeColors[len - 1]).analogous(10 + 1 - len).map((color)=>color.toRgbString());
            colors = [
                ...rawThemeColors.slice(0, len - 1),
                ...supplement
            ];
        }
        return colors;
    }, [
        rawThemeColors
    ]);
    // Update chart option
    const updateOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return ()=>{
            if (!chartInstance.current) return;
            const option = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ChartElement$2f$chartOption$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChartOption"])({
                type,
                data,
                themeColors,
                textColor,
                lineColor,
                lineSmooth: options?.lineSmooth || false,
                stack: options?.stack || false
            });
            if (option) {
                chartInstance.current.setOption(option, true);
            }
        };
    }, [
        type,
        data,
        themeColors,
        textColor,
        lineColor,
        options
    ]);
    // Initialize chart
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!chartRef.current) return;
        chartInstance.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$echarts$40$6$2e$0$2e$0$2f$node_modules$2f$echarts$2f$lib$2f$core$2f$echarts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["init"](chartRef.current, null, {
            renderer: 'svg'
        });
        updateOption();
        const resizeObserver = new ResizeObserver(()=>{
            chartInstance.current?.resize();
        });
        resizeObserver.observe(chartRef.current);
        return ()=>{
            resizeObserver.disconnect();
            chartInstance.current?.dispose();
            chartInstance.current = null;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Init-only effect: chart setup and resize observer
    }, []);
    // Update chart when props change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        updateOption();
    }, [
        updateOption
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: chartRef,
        className: "chart w-full h-full"
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/ChartElement/Chart.tsx",
        lineNumber: 114,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/ChartElement/BaseChartElement.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseChartElement",
    ()=>BaseChartElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ElementOutline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ElementOutline.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ChartElement$2f$Chart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ChartElement/Chart.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function BaseChartElement({ elementInfo, target }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `base-element-chart absolute ${target === 'thumbnail' ? 'pointer-events-none' : ''}`,
        style: {
            top: `${elementInfo.top}px`,
            left: `${elementInfo.left}px`,
            width: `${elementInfo.width}px`,
            height: `${elementInfo.height}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rotate-wrapper w-full h-full",
            style: {
                transform: `rotate(${elementInfo.rotate}deg)`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "element-content w-full h-full",
                style: {
                    backgroundColor: elementInfo.fill
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ElementOutline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementOutline"], {
                        width: elementInfo.width,
                        height: elementInfo.height,
                        outline: elementInfo.outline
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/ChartElement/BaseChartElement.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ChartElement$2f$Chart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chart"], {
                        width: elementInfo.width,
                        height: elementInfo.height,
                        type: elementInfo.chartType,
                        data: elementInfo.data,
                        themeColors: elementInfo.themeColors,
                        textColor: elementInfo.textColor,
                        lineColor: elementInfo.lineColor,
                        options: elementInfo.options
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/ChartElement/BaseChartElement.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/slide-renderer/components/element/ChartElement/BaseChartElement.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/ChartElement/BaseChartElement.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/ChartElement/BaseChartElement.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/LatexElement/BaseLatexElement.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseLatexElement",
    ()=>BaseLatexElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function BaseLatexElement({ elementInfo }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "base-element-latex absolute",
        style: {
            top: `${elementInfo.top}px`,
            left: `${elementInfo.left}px`,
            width: `${elementInfo.width}px`,
            height: `${elementInfo.height}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rotate-wrapper w-full h-full",
            style: {
                transform: `rotate(${elementInfo.rotate}deg)`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "element-content relative w-full h-full",
                children: elementInfo.html ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KatexContent, {
                    html: elementInfo.html,
                    width: elementInfo.width,
                    height: elementInfo.height,
                    align: elementInfo.align
                }, void 0, false, {
                    fileName: "[project]/components/slide-renderer/components/element/LatexElement/BaseLatexElement.tsx",
                    lineNumber: 31,
                    columnNumber: 13
                }, this) : elementInfo.path && elementInfo.viewBox ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    overflow: "visible",
                    width: elementInfo.width,
                    height: elementInfo.height,
                    stroke: elementInfo.color,
                    strokeWidth: elementInfo.strokeWidth,
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "transform-origin-[0_0] overflow-visible",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: `scale(${elementInfo.width / elementInfo.viewBox[0]}, ${elementInfo.height / elementInfo.viewBox[1]}) translate(0,0) matrix(1,0,0,1,0,0)`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: elementInfo.path
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/components/element/LatexElement/BaseLatexElement.tsx",
                            lineNumber: 54,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/LatexElement/BaseLatexElement.tsx",
                        lineNumber: 49,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/slide-renderer/components/element/LatexElement/BaseLatexElement.tsx",
                    lineNumber: 38,
                    columnNumber: 13
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/components/element/LatexElement/BaseLatexElement.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/LatexElement/BaseLatexElement.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/LatexElement/BaseLatexElement.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
const ALIGN_MAP = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
};
function KatexContent({ html, width, height, align = 'center' }) {
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!innerRef.current) return;
        const naturalW = innerRef.current.scrollWidth;
        const naturalH = innerRef.current.scrollHeight;
        if (naturalW > 0 && naturalH > 0) {
            setScale(Math.min(width / naturalW, height / naturalH));
        }
    }, [
        html,
        width,
        height
    ]);
    const justify = ALIGN_MAP[align];
    const origin = align === 'left' ? 'left center' : align === 'right' ? 'right center' : 'center center';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width,
            height,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: justify
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: innerRef,
            className: "[&_.katex-display]:!m-0",
            style: {
                transformOrigin: origin,
                transform: `scale(${scale})`,
                whiteSpace: 'nowrap'
            },
            dangerouslySetInnerHTML: {
                __html: html
            }
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/LatexElement/BaseLatexElement.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/LatexElement/BaseLatexElement.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/TableElement/tableUtils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatText",
    ()=>formatText,
    "getHiddenCells",
    ()=>getHiddenCells,
    "getTextStyle",
    ()=>getTextStyle
]);
function getTextStyle(style) {
    if (!style) return {};
    const css = {};
    if (style.bold) css.fontWeight = 'bold';
    if (style.em) css.fontStyle = 'italic';
    if (style.underline) css.textDecoration = 'underline';
    if (style.strikethrough) {
        css.textDecoration = css.textDecoration ? `${css.textDecoration} line-through` : 'line-through';
    }
    if (style.color) css.color = style.color;
    if (style.backcolor) css.backgroundColor = style.backcolor;
    if (style.fontsize) css.fontSize = style.fontsize;
    if (style.fontname) css.fontFamily = style.fontname;
    if (style.align) css.textAlign = style.align;
    return css;
}
function formatText(text) {
    return text.replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;');
}
function getHiddenCells(data) {
    const hidden = new Set();
    for(let rowIdx = 0; rowIdx < data.length; rowIdx++){
        let realColIdx = 0;
        for(let colIdx = 0; colIdx < data[rowIdx].length; colIdx++){
            // Skip positions already occupied by a previous merge
            while(hidden.has(`${rowIdx}_${realColIdx}`)){
                realColIdx++;
            }
            const cell = data[rowIdx][colIdx];
            const colspan = cell.colspan ?? 1;
            const rowspan = cell.rowspan ?? 1;
            if (colspan > 1 || rowspan > 1) {
                for(let r = 0; r < rowspan; r++){
                    for(let c = 0; c < colspan; c++){
                        if (r === 0 && c === 0) continue;
                        hidden.add(`${rowIdx + r}_${realColIdx + c}`);
                    }
                }
            }
            realColIdx += colspan;
        }
    }
    return hidden;
}
}),
"[project]/components/slide-renderer/components/element/TableElement/StaticTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StaticTable",
    ()=>StaticTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/element.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TableElement$2f$tableUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/TableElement/tableUtils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function StaticTable({ elementInfo }) {
    const { width, data, colWidths, cellMinHeight, outline, theme } = elementInfo;
    const hiddenCells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TableElement$2f$tableUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHiddenCells"])(data), [
        data
    ]);
    const [subThemeDark, subThemeLight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!theme) return [
            '',
            ''
        ];
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTableSubThemeColor"])(theme.color);
    }, [
        theme
    ]);
    const borderStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!outline) return 'none';
        const w = outline.width ?? 1;
        const c = outline.color ?? '#000';
        const s = outline.style === 'dashed' ? 'dashed' : 'solid';
        return `${w}px ${s} ${c}`;
    }, [
        outline
    ]);
    /**
   * Get background color for a cell based on theme and position
   */ const getCellBg = (rowIdx, colIdx, cellBackcolor)=>{
        if (cellBackcolor) return cellBackcolor;
        if (!theme) return undefined;
        const rowCount = data.length;
        const colCount = data[0]?.length ?? 0;
        // Row header (first row) gets theme color
        if (theme.rowHeader && rowIdx === 0) return theme.color;
        // Row footer (last row) gets theme color
        if (theme.rowFooter && rowIdx === rowCount - 1) return theme.color;
        // Col header (first col) gets dark sub-theme
        if (theme.colHeader && colIdx === 0) return subThemeDark;
        // Col footer (last col) gets dark sub-theme
        if (theme.colFooter && colIdx === colCount - 1) return subThemeDark;
        // Alternating row colors (skip header row for counting)
        const effectiveRow = theme.rowHeader ? rowIdx - 1 : rowIdx;
        if (effectiveRow >= 0 && effectiveRow % 2 === 0) return subThemeLight;
        return undefined;
    };
    /**
   * Get text color for header/footer rows (white text on dark bg)
   */ const getHeaderTextColor = (rowIdx)=>{
        if (!theme) return undefined;
        const rowCount = data.length;
        if (theme.rowHeader && rowIdx === 0) return '#fff';
        if (theme.rowFooter && rowIdx === rowCount - 1) return '#fff';
        return undefined;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
        className: "w-full h-full",
        style: {
            borderCollapse: 'collapse',
            tableLayout: 'fixed'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("colgroup", {
                children: colWidths.map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                        style: {
                            width: `${w * width}px`
                        }
                    }, i, false, {
                        fileName: "[project]/components/slide-renderer/components/element/TableElement/StaticTable.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/components/element/TableElement/StaticTable.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                children: data.map((row, rowIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        style: {
                            height: `${cellMinHeight}px`
                        },
                        children: row.map((cell, colIdx)=>{
                            if (hiddenCells.has(`${rowIdx}_${colIdx}`)) return null;
                            const bgColor = getCellBg(rowIdx, colIdx, cell.style?.backcolor);
                            const headerColor = getHeaderTextColor(rowIdx);
                            const textStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TableElement$2f$tableUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTextStyle"])(cell.style);
                            // Header text color should be overridden only if cell doesn't have its own color
                            if (headerColor && !cell.style?.color) {
                                textStyle.color = headerColor;
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: cell.colspan > 1 ? cell.colspan : undefined,
                                rowSpan: cell.rowspan > 1 ? cell.rowspan : undefined,
                                style: {
                                    border: borderStyle,
                                    backgroundColor: bgColor,
                                    padding: '5px',
                                    verticalAlign: 'middle',
                                    wordBreak: 'break-word',
                                    ...textStyle
                                },
                                dangerouslySetInnerHTML: {
                                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TableElement$2f$tableUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatText"])(cell.text)
                                }
                            }, cell.id, false, {
                                fileName: "[project]/components/slide-renderer/components/element/TableElement/StaticTable.tsx",
                                lineNumber: 104,
                                columnNumber: 17
                            }, this);
                        })
                    }, rowIdx, false, {
                        fileName: "[project]/components/slide-renderer/components/element/TableElement/StaticTable.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/components/element/TableElement/StaticTable.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/slide-renderer/components/element/TableElement/StaticTable.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/TableElement/BaseTableElement.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseTableElement",
    ()=>BaseTableElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TableElement$2f$StaticTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/TableElement/StaticTable.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function BaseTableElement({ elementInfo, target }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `base-element-table absolute ${target === 'thumbnail' ? 'pointer-events-none' : ''}`,
        style: {
            top: `${elementInfo.top}px`,
            left: `${elementInfo.left}px`,
            width: `${elementInfo.width}px`,
            height: `${elementInfo.height}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rotate-wrapper w-full h-full",
            style: {
                transform: `rotate(${elementInfo.rotate}deg)`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "element-content w-full h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TableElement$2f$StaticTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StaticTable"], {
                    elementInfo: elementInfo
                }, void 0, false, {
                    fileName: "[project]/components/slide-renderer/components/element/TableElement/BaseTableElement.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/components/element/TableElement/BaseTableElement.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/TableElement/BaseTableElement.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/TableElement/BaseTableElement.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseVideoElement",
    ()=>BaseVideoElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$35$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.35.2_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/media-generation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/settings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$media$2d$stage$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contexts/media-stage-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$media$2f$media$2d$orchestrator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/media/media-orchestrator.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/film.js [app-ssr] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-ssr] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.562.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/video-off.js [app-ssr] (ecmascript) <export default as VideoOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-i18n.tsx [app-ssr] (ecmascript)");
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
const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])('BaseVideoElement');
function BaseVideoElement({ elementInfo }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$i18n$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playingVideoElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.playingVideoElementId();
    const prevPlayingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])('');
    const [scope, animate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$35$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimate"])();
    // Only subscribe to media store when inside a classroom (stageId provided via context).
    const stageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$media$2d$stage$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaStageId"])();
    const isPlaceholder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMediaPlaceholder"])(elementInfo.src);
    const task = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaGenerationStore"])((s)=>{
        if (!isPlaceholder) return undefined;
        const t = s.tasks[elementInfo.src];
        if (t && t.stageId !== stageId) return undefined;
        return t;
    });
    const videoGenerationEnabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$settings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettingsStore"])((s)=>s.videoGenerationEnabled);
    const resolvedSrc = task?.status === 'done' && task.objectUrl ? task.objectUrl : elementInfo.src;
    const showDisabled = isPlaceholder && !task && !videoGenerationEnabled;
    const showSkeleton = isPlaceholder && !showDisabled && (!task || task.status === 'pending' || task.status === 'generating');
    const showError = isPlaceholder && task?.status === 'failed';
    const isReady = !isPlaceholder || task?.status === 'done';
    // Ensure video is paused on mount — prevents browser autoplay from user gesture context
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const video = videoRef.current;
        if (video) {
            video.pause();
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const video = videoRef.current;
        if (!video) return;
        const isMe = playingVideoElementId === elementInfo.id;
        const wasMe = prevPlayingRef.current === elementInfo.id;
        prevPlayingRef.current = playingVideoElementId;
        if (isMe && !wasMe) {
            // "Tap" press animation — a deliberate, teacher-paced click feel
            animate(scope.current, {
                scale: [
                    1,
                    1.035,
                    1
                ]
            }, {
                duration: 0.6,
                ease: [
                    0.25,
                    0.1,
                    0.25,
                    1
                ],
                times: [
                    0,
                    0.35,
                    1
                ]
            });
            video.play().catch((err)=>{
                log.warn('[BaseVideoElement] play() failed:', err);
            });
        } else if (!isMe && wasMe) {
            video.pause();
        }
    }, [
        playingVideoElementId,
        elementInfo.id,
        animate,
        scope
    ]);
    const handleEnded = ()=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().playingVideoElementId === elementInfo.id) {
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].getState().pauseVideo();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute",
        "data-video-element": true,
        style: {
            top: `${elementInfo.top}px`,
            left: `${elementInfo.left}px`,
            width: `${elementInfo.width}px`,
            height: `${elementInfo.height}px`
        },
        onClick: (e)=>e.stopPropagation(),
        onPointerDown: (e)=>e.stopPropagation(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: scope,
            className: "w-full h-full",
            style: {
                transform: `rotate(${elementInfo.rotate}deg)`
            },
            children: showDisabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full bg-gray-50 dark:bg-gray-900/30 flex items-center justify-center rounded",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-gray-500 dark:text-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                            className: "w-3 h-3 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                            lineNumber: 114,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: t('settings.mediaGenerationDisabled')
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                            lineNumber: 115,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                    lineNumber: 113,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                lineNumber: 112,
                columnNumber: 11
            }, this) : showSkeleton ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full bg-gradient-to-br from-indigo-50 via-violet-50/60 to-blue-50 dark:from-indigo-950/40 dark:via-violet-950/30 dark:to-blue-950/20 flex items-center justify-center rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
              @keyframes vid-pulse-ring { 0%, 100% { opacity: 0.15; transform: scale(0.85); } 50% { opacity: 0.35; transform: scale(1.1); } }
            `
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                        lineNumber: 120,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-14 h-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 rounded-full border-2 border-indigo-300/40 dark:border-indigo-500/30",
                                style: {
                                    animation: 'vid-pulse-ring 2.4s ease-in-out infinite'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                                className: "absolute inset-0 m-auto w-5 h-5 text-indigo-400/80 dark:text-indigo-500/70",
                                strokeWidth: 1.5
                            }, void 0, false, {
                                fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                        lineNumber: 123,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                lineNumber: 119,
                columnNumber: 11
            }, this) : showError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full bg-red-50 dark:bg-red-900/20 flex flex-col items-center justify-center gap-1.5 rounded",
                children: task?.errorCode === 'CONTENT_SENSITIVE' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-amber-600 dark:text-amber-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                            className: "w-3 h-3 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                            lineNumber: 140,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: t('settings.mediaContentSensitive')
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                            lineNumber: 141,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                    lineNumber: 139,
                    columnNumber: 15
                }, this) : task?.errorCode === 'GENERATION_DISABLED' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-gray-500 dark:text-gray-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                            className: "w-3 h-3 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                            lineNumber: 145,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: t('settings.mediaGenerationDisabled')
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                            lineNumber: 146,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                    lineNumber: 144,
                    columnNumber: 15
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$media$2f$media$2d$orchestrator$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retryMediaTask"])(elementInfo.src);
                    },
                    onPointerDown: (e)=>e.stopPropagation(),
                    className: "flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/40 rounded hover:bg-red-200 dark:hover:bg-red-900/60 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$562$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                            lineNumber: 157,
                            columnNumber: 17
                        }, this),
                        t('settings.mediaRetry')
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                    lineNumber: 149,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                lineNumber: 137,
                columnNumber: 11
            }, this) : isReady && resolvedSrc && !isPlaceholder || isPlaceholder && task?.status === 'done' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                className: "w-full h-full",
                style: {
                    objectFit: 'contain'
                },
                src: resolvedSrc,
                poster: task?.poster || elementInfo.poster,
                preload: "metadata",
                controls: true,
                onEnded: handleEnded
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                lineNumber: 164,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex items-center justify-center bg-black/10 rounded",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-12 h-12 text-gray-400",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "5 3 19 12 5 21 5 3"
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                        lineNumber: 185,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                    lineNumber: 176,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
                lineNumber: 175,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/ThumbnailSlide/ThumbnailElement.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThumbnailElement",
    ()=>ThumbnailElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/slides.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$BaseImageElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TextElement$2f$BaseTextElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/TextElement/BaseTextElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ShapeElement$2f$BaseShapeElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ShapeElement/BaseShapeElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LineElement$2f$BaseLineElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/LineElement/BaseLineElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ChartElement$2f$BaseChartElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ChartElement/BaseChartElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LatexElement$2f$BaseLatexElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/LatexElement/BaseLatexElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TableElement$2f$BaseTableElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/TableElement/BaseTableElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$VideoElement$2f$BaseVideoElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx [app-ssr] (ecmascript)");
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
function ThumbnailElement({ elementInfo, elementIndex }) {
    const CurrentElementComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- element components have varying prop signatures
        const elementTypeMap = {
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].IMAGE]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$BaseImageElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseImageElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].TEXT]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TextElement$2f$BaseTextElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseTextElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].SHAPE]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ShapeElement$2f$BaseShapeElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseShapeElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].LINE]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LineElement$2f$BaseLineElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseLineElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].CHART]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ChartElement$2f$BaseChartElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseChartElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].LATEX]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LatexElement$2f$BaseLatexElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseLatexElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].TABLE]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TableElement$2f$BaseTableElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseTableElement"],
            // TODO: Add other element types
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].VIDEO]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$VideoElement$2f$BaseVideoElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseVideoElement"]
        };
        return elementTypeMap[elementInfo.type] || null;
    }, [
        elementInfo.type
    ]);
    if (!CurrentElementComponent) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `base-element base-element-${elementInfo.id}`,
        style: {
            zIndex: elementIndex
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrentElementComponent, {
            elementInfo: elementInfo,
            target: "thumbnail"
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/ThumbnailSlide/ThumbnailElement.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/ThumbnailSlide/ThumbnailElement.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/ThumbnailSlide/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThumbnailSlide",
    ()=>ThumbnailSlide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$slide$2d$background$2d$style$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-slide-background-style.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$ThumbnailSlide$2f$ThumbnailElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/ThumbnailSlide/ThumbnailElement.tsx [app-ssr] (ecmascript)");
;
;
;
;
function ThumbnailSlide({ slide, size, viewportSize, viewportRatio, visible = true }) {
    // Calculate scale ratio
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>size / viewportSize, [
        size,
        viewportSize
    ]);
    // Get background style
    const { backgroundStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$slide$2d$background$2d$style$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSlideBackgroundStyle"])(slide.background);
    if (!visible) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "thumbnail-slide bg-white overflow-hidden select-none",
            style: {
                width: `${size}px`,
                height: `${size * viewportRatio}px`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "placeholder w-full h-full flex justify-center items-center text-gray-400 text-sm",
                children: "加载中 ..."
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/components/ThumbnailSlide/index.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/ThumbnailSlide/index.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "thumbnail-slide bg-white overflow-hidden select-none",
        style: {
            width: `${size}px`,
            height: `${size * viewportRatio}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "elements origin-top-left",
            style: {
                width: `${viewportSize}px`,
                height: `${viewportSize * viewportRatio}px`,
                transform: `scale(${scale})`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "background w-full h-full bg-center absolute",
                    style: backgroundStyle
                }, void 0, false, {
                    fileName: "[project]/components/slide-renderer/components/ThumbnailSlide/index.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                slide.elements.map((element, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$ThumbnailSlide$2f$ThumbnailElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThumbnailElement"], {
                        elementInfo: element,
                        elementIndex: index + 1
                    }, element.id, false, {
                        fileName: "[project]/components/slide-renderer/components/ThumbnailSlide/index.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/components/slide-renderer/components/ThumbnailSlide/index.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/ThumbnailSlide/index.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/hooks/useViewportSize.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useViewportSize",
    ()=>useViewportSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
;
;
function useViewportSize(canvasRef) {
    const [viewportLeft, setViewportLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [viewportTop, setViewportTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const canvasPercentage = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasPercentage();
    const canvasDragged = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasDragged();
    const setCanvasScale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setCanvasScale();
    const setCanvasDragged = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setCanvasDragged();
    const viewportRatio = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.viewportRatio();
    const viewportSize = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.viewportSize();
    // Initialize viewport position
    const initViewportPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!canvasRef.current) return;
        const canvasWidth = canvasRef.current.clientWidth;
        const canvasHeight = canvasRef.current.clientHeight;
        if (canvasHeight / canvasWidth > viewportRatio) {
            const viewportActualWidth = canvasWidth * (canvasPercentage / 100);
            setCanvasScale(viewportActualWidth / viewportSize);
            setViewportLeft((canvasWidth - viewportActualWidth) / 2);
            setViewportTop((canvasHeight - viewportActualWidth * viewportRatio) / 2);
        } else {
            const viewportActualHeight = canvasHeight * (canvasPercentage / 100);
            setCanvasScale(viewportActualHeight / (viewportSize * viewportRatio));
            setViewportLeft((canvasWidth - viewportActualHeight / viewportRatio) / 2);
            setViewportTop((canvasHeight - viewportActualHeight) / 2);
        }
    }, [
        canvasRef,
        canvasPercentage,
        viewportRatio,
        viewportSize,
        setCanvasScale
    ]);
    // Update viewport position
    const setViewportPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newValue, oldValue)=>{
        if (!canvasRef.current) return;
        const canvasWidth = canvasRef.current.clientWidth;
        const canvasHeight = canvasRef.current.clientHeight;
        if (canvasHeight / canvasWidth > viewportRatio) {
            const newViewportActualWidth = canvasWidth * (newValue / 100);
            const oldViewportActualWidth = canvasWidth * (oldValue / 100);
            const newViewportActualHeight = newViewportActualWidth * viewportRatio;
            const oldViewportActualHeight = oldViewportActualWidth * viewportRatio;
            setCanvasScale(newViewportActualWidth / viewportSize);
            setViewportLeft((prev)=>prev - (newViewportActualWidth - oldViewportActualWidth) / 2);
            setViewportTop((prev)=>prev - (newViewportActualHeight - oldViewportActualHeight) / 2);
        } else {
            const newViewportActualHeight = canvasHeight * (newValue / 100);
            const oldViewportActualHeight = canvasHeight * (oldValue / 100);
            const newViewportActualWidth = newViewportActualHeight / viewportRatio;
            const oldViewportActualWidth = oldViewportActualHeight / viewportRatio;
            setCanvasScale(newViewportActualHeight / (viewportSize * viewportRatio));
            setViewportLeft((prev)=>prev - (newViewportActualWidth - oldViewportActualWidth) / 2);
            setViewportTop((prev)=>prev - (newViewportActualHeight - oldViewportActualHeight) / 2);
        }
    }, [
        canvasRef,
        viewportRatio,
        viewportSize,
        setCanvasScale
    ]);
    // Track previous Canvas percentage for detecting changes
    const prevCanvasPercentageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(canvasPercentage);
    // Update viewport position when canvas percentage changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (prevCanvasPercentageRef.current !== canvasPercentage) {
            setViewportPosition(canvasPercentage, prevCanvasPercentageRef.current);
            prevCanvasPercentageRef.current = canvasPercentage;
        }
    }, [
        canvasPercentage,
        setViewportPosition
    ]);
    // Reset viewport position when viewport ratio or size changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        initViewportPosition();
    }, [
        viewportRatio,
        viewportSize,
        initViewportPosition
    ]);
    // Reset viewport position when drag state is restored
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!canvasDragged) {
            initViewportPosition();
        }
    }, [
        canvasDragged,
        initViewportPosition
    ]);
    // Reset viewport position when canvas is resized
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = canvasRef.current;
        const resizeObserver = new ResizeObserver(initViewportPosition);
        if (el) {
            resizeObserver.observe(el);
        }
        return ()=>{
            if (el) {
                resizeObserver.unobserve(el);
            }
        };
    }, [
        canvasRef,
        initViewportPosition
    ]);
    // Drag canvas viewport
    const dragViewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        let isMouseDown = true;
        const startPageX = e.pageX;
        const startPageY = e.pageY;
        const originLeft = viewportLeft;
        const originTop = viewportTop;
        const handleMouseMove = (e)=>{
            if (!isMouseDown) return;
            const currentPageX = e.pageX;
            const currentPageY = e.pageY;
            setViewportLeft(originLeft + (currentPageX - startPageX));
            setViewportTop(originTop + (currentPageY - startPageY));
        };
        const handleMouseUp = ()=>{
            isMouseDown = false;
            document.onmousemove = null;
            document.onmouseup = null;
            setCanvasDragged(true);
        };
        document.onmousemove = handleMouseMove;
        document.onmouseup = handleMouseUp;
    }, [
        viewportLeft,
        viewportTop,
        setCanvasDragged
    ]);
    // Viewport position and size styles
    const viewportStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            width: viewportSize,
            height: viewportSize * viewportRatio,
            left: viewportLeft,
            top: viewportTop
        }), [
        viewportSize,
        viewportRatio,
        viewportLeft,
        viewportTop
    ]);
    return {
        viewportStyles,
        dragViewport
    };
}
}),
"[project]/components/slide-renderer/Editor/Canvas/hooks/useSelectElement.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSelectElement",
    ()=>useSelectElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$23$2f$node_modules$2f$lodash$2f$uniq$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.23/node_modules/lodash/uniq.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/keyboard.ts [app-ssr] (ecmascript)");
;
;
;
;
function useSelectElement(elementListRef, moveElement) {
    const activeElementIdList = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.activeElementIdList();
    const activeGroupElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.activeGroupElementId();
    const handleElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.handleElementId();
    const editorAreaFocus = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.editorAreaFocus();
    const setActiveElementIdList = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setActiveElementIdList();
    const setHandleElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setHandleElementId();
    const setActiveGroupElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setActiveGroupElementId();
    const setEditorAreaFocus = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setEditorAreaFocus();
    const ctrlOrShiftKeyActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKeyboardStore"])((state)=>state.ctrlOrShiftKeyActive());
    // Select element
    // startMove indicates whether to enter move state after selection
    const selectElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, element, startMove = true)=>{
        if (!editorAreaFocus) setEditorAreaFocus(true);
        // If the target element is not currently selected, set it as selected
        // If Ctrl or Shift is held, enter multi-select mode: add target to current selection; otherwise select only the target
        // If the target is a group member, also select the other members of that group
        if (!activeElementIdList.includes(element.id)) {
            let newActiveIdList = [];
            if (ctrlOrShiftKeyActive) {
                newActiveIdList = [
                    ...activeElementIdList,
                    element.id
                ];
            } else {
                newActiveIdList = [
                    element.id
                ];
            }
            if (element.groupId) {
                const groupMembersId = [];
                elementListRef.current.forEach((el)=>{
                    if (el.groupId === element.groupId) groupMembersId.push(el.id);
                });
                newActiveIdList = [
                    ...newActiveIdList,
                    ...groupMembersId
                ];
            }
            setActiveElementIdList((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$23$2f$node_modules$2f$lodash$2f$uniq$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(newActiveIdList));
            setHandleElementId(element.id);
        } else if (ctrlOrShiftKeyActive) {
            let newActiveIdList = [];
            if (element.groupId) {
                const groupMembersId = [];
                elementListRef.current.forEach((el)=>{
                    if (el.groupId === element.groupId) groupMembersId.push(el.id);
                });
                newActiveIdList = activeElementIdList.filter((id)=>!groupMembersId.includes(id));
            } else {
                newActiveIdList = activeElementIdList.filter((id)=>id !== element.id);
            }
            if (newActiveIdList.length > 0) {
                setActiveElementIdList(newActiveIdList);
            }
        } else if (handleElementId !== element.id) {
            setHandleElementId(element.id);
        } else if (activeGroupElementId !== element.id) {
            const startPageX = e.nativeEvent instanceof MouseEvent ? e.nativeEvent.pageX : 'changedTouches' in e ? e.changedTouches[0].pageX : 0;
            const startPageY = e.nativeEvent instanceof MouseEvent ? e.nativeEvent.pageY : 'changedTouches' in e ? e.changedTouches[0].pageY : 0;
            const target = e.target;
            const handleMouseUp = (e)=>{
                const currentPageX = e.pageX;
                const currentPageY = e.pageY;
                if (startPageX === currentPageX && startPageY === currentPageY) {
                    setActiveGroupElementId(element.id);
                    target.onmouseup = null;
                }
            };
            target.onmouseup = handleMouseUp;
        }
        if (startMove) moveElement(e, element);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps -- Intentionally excludes elementListRef (stable ref) to avoid infinite re-creation
    [
        editorAreaFocus,
        activeElementIdList,
        ctrlOrShiftKeyActive,
        handleElementId,
        activeGroupElementId,
        setEditorAreaFocus,
        setActiveElementIdList,
        setHandleElementId,
        setActiveGroupElementId,
        moveElement
    ]);
    return {
        selectElement
    };
}
}),
"[project]/components/slide-renderer/Editor/Canvas/hooks/useDragElement.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDragElement",
    ()=>useDragElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/keyboard.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$history$2d$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-history-snapshot.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/element.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-canvas-operations.ts [app-ssr] (ecmascript)");
;
;
;
;
;
function useDragElement(elementListRef, setElementList, setAlignmentLines) {
    const activeElementIdList = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.activeElementIdList();
    const activeGroupElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.activeGroupElementId();
    const canvasScale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasScale();
    const shiftKeyState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKeyboardStore"])((state)=>state.shiftKeyState);
    const viewportRatio = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.viewportRatio();
    const viewportSize = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.viewportSize();
    const updateSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasOperations"])().updateSlide;
    const { addHistorySnapshot } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$history$2d$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHistorySnapshot"])();
    const dragElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, element)=>{
        const native = e.nativeEvent;
        const isTouchEvent = native instanceof TouchEvent;
        if (isTouchEvent && !native.changedTouches?.length) return;
        if (!activeElementIdList.includes(element.id)) return;
        let isMouseDown = true;
        const edgeWidth = viewportSize;
        const edgeHeight = viewportSize * viewportRatio;
        const sorptionRange = 5;
        // Save original element list for computing multi-select offsets
        const originElementList = JSON.parse(JSON.stringify(elementListRef.current));
        const originActiveElementList = originElementList.filter((el)=>activeElementIdList.includes(el.id));
        const elOriginLeft = element.left;
        const elOriginTop = element.top;
        const elOriginWidth = element.width;
        const elOriginHeight = 'height' in element && element.height ? element.height : 0;
        const elOriginRotate = 'rotate' in element && element.rotate ? element.rotate : 0;
        const startPageX = isTouchEvent ? native.changedTouches[0].pageX : native.pageX;
        const startPageY = isTouchEvent ? native.changedTouches[0].pageY : native.pageY;
        let isMisoperation = null;
        const isActiveGroupElement = element.id === activeGroupElementId;
        // Collect alignment snap lines
        // Includes snap positions of other elements on canvas (excluding the target): top/bottom/left/right edges, horizontal/vertical centers
        // Lines and rotated elements need their bounding ranges recalculated
        let horizontalLines = [];
        let verticalLines = [];
        for (const el of elementListRef.current){
            if (el.type === 'line') continue;
            if (isActiveGroupElement && el.id === element.id) continue;
            if (!isActiveGroupElement && activeElementIdList.includes(el.id)) continue;
            let left, top, width, height;
            if ('rotate' in el && el.rotate) {
                const { xRange, yRange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRectRotatedRange"])({
                    left: el.left,
                    top: el.top,
                    width: el.width,
                    height: el.height,
                    rotate: el.rotate
                });
                left = xRange[0];
                top = yRange[0];
                width = xRange[1] - xRange[0];
                height = yRange[1] - yRange[0];
            } else {
                left = el.left;
                top = el.top;
                width = el.width;
                height = el.height;
            }
            const right = left + width;
            const bottom = top + height;
            const centerX = top + height / 2;
            const centerY = left + width / 2;
            const topLine = {
                value: top,
                range: [
                    left,
                    right
                ]
            };
            const bottomLine = {
                value: bottom,
                range: [
                    left,
                    right
                ]
            };
            const horizontalCenterLine = {
                value: centerX,
                range: [
                    left,
                    right
                ]
            };
            const leftLine = {
                value: left,
                range: [
                    top,
                    bottom
                ]
            };
            const rightLine = {
                value: right,
                range: [
                    top,
                    bottom
                ]
            };
            const verticalCenterLine = {
                value: centerY,
                range: [
                    top,
                    bottom
                ]
            };
            horizontalLines.push(topLine, bottomLine, horizontalCenterLine);
            verticalLines.push(leftLine, rightLine, verticalCenterLine);
        }
        // Canvas viewport edges: four boundaries, horizontal center, vertical center
        const edgeTopLine = {
            value: 0,
            range: [
                0,
                edgeWidth
            ]
        };
        const edgeBottomLine = {
            value: edgeHeight,
            range: [
                0,
                edgeWidth
            ]
        };
        const edgeHorizontalCenterLine = {
            value: edgeHeight / 2,
            range: [
                0,
                edgeWidth
            ]
        };
        const edgeLeftLine = {
            value: 0,
            range: [
                0,
                edgeHeight
            ]
        };
        const edgeRightLine = {
            value: edgeWidth,
            range: [
                0,
                edgeHeight
            ]
        };
        const edgeVerticalCenterLine = {
            value: edgeWidth / 2,
            range: [
                0,
                edgeHeight
            ]
        };
        horizontalLines.push(edgeTopLine, edgeBottomLine, edgeHorizontalCenterLine);
        verticalLines.push(edgeLeftLine, edgeRightLine, edgeVerticalCenterLine);
        // Deduplicate alignment snap lines
        horizontalLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uniqAlignLines"])(horizontalLines);
        verticalLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uniqAlignLines"])(verticalLines);
        const handleMouseMove = (e)=>{
            const currentPageX = e instanceof MouseEvent ? e.pageX : e.changedTouches[0].pageX;
            const currentPageY = e instanceof MouseEvent ? e.pageY : e.changedTouches[0].pageY;
            // If mouse movement is too small, consider it a misoperation:
            // null = first move, need to check; true = still in misoperation range; false = moved beyond range
            if (isMisoperation !== false) {
                isMisoperation = Math.abs(startPageX - currentPageX) < sorptionRange && Math.abs(startPageY - currentPageY) < sorptionRange;
            }
            if (!isMouseDown || isMisoperation) return;
            let moveX = (currentPageX - startPageX) / canvasScale;
            let moveY = (currentPageY - startPageY) / canvasScale;
            // Lock to horizontal or vertical direction when Shift is held
            if (shiftKeyState) {
                if (Math.abs(moveX) > Math.abs(moveY)) moveY = 0;
                if (Math.abs(moveX) < Math.abs(moveY)) moveX = 0;
            }
            // Base target position
            let targetLeft = elOriginLeft + moveX;
            let targetTop = elOriginTop + moveY;
            // Calculate target element's bounding range on canvas for alignment snapping
            // Must distinguish single-select vs multi-select; single-select further distinguishes line, normal, and rotated elements
            let targetMinX, targetMaxX, targetMinY, targetMaxY;
            if (activeElementIdList.length === 1 || isActiveGroupElement) {
                if (elOriginRotate) {
                    const { xRange, yRange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRectRotatedRange"])({
                        left: targetLeft,
                        top: targetTop,
                        width: elOriginWidth,
                        height: elOriginHeight,
                        rotate: elOriginRotate
                    });
                    targetMinX = xRange[0];
                    targetMaxX = xRange[1];
                    targetMinY = yRange[0];
                    targetMaxY = yRange[1];
                } else if (element.type === 'line') {
                    targetMinX = targetLeft;
                    targetMaxX = targetLeft + Math.max(element.start[0], element.end[0]);
                    targetMinY = targetTop;
                    targetMaxY = targetTop + Math.max(element.start[1], element.end[1]);
                } else {
                    targetMinX = targetLeft;
                    targetMaxX = targetLeft + elOriginWidth;
                    targetMinY = targetTop;
                    targetMaxY = targetTop + elOriginHeight;
                }
            } else {
                const leftValues = [];
                const topValues = [];
                const rightValues = [];
                const bottomValues = [];
                for(let i = 0; i < originActiveElementList.length; i++){
                    const element = originActiveElementList[i];
                    const left = element.left + moveX;
                    const top = element.top + moveY;
                    const width = element.width;
                    const height = 'height' in element && element.height ? element.height : 0;
                    const rotate = 'rotate' in element && element.rotate ? element.rotate : 0;
                    if ('rotate' in element && element.rotate) {
                        const { xRange, yRange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRectRotatedRange"])({
                            left,
                            top,
                            width,
                            height,
                            rotate
                        });
                        leftValues.push(xRange[0]);
                        topValues.push(yRange[0]);
                        rightValues.push(xRange[1]);
                        bottomValues.push(yRange[1]);
                    } else if (element.type === 'line') {
                        leftValues.push(left);
                        topValues.push(top);
                        rightValues.push(left + Math.max(element.start[0], element.end[0]));
                        bottomValues.push(top + Math.max(element.start[1], element.end[1]));
                    } else {
                        leftValues.push(left);
                        topValues.push(top);
                        rightValues.push(left + width);
                        bottomValues.push(top + height);
                    }
                }
                targetMinX = Math.min(...leftValues);
                targetMaxX = Math.max(...rightValues);
                targetMinY = Math.min(...topValues);
                targetMaxY = Math.max(...bottomValues);
            }
            const targetCenterX = targetMinX + (targetMaxX - targetMinX) / 2;
            const targetCenterY = targetMinY + (targetMaxY - targetMinY) / 2;
            // Compare alignment snap lines with target position; auto-correct when difference is within threshold
            // Horizontal and vertical directions are calculated separately
            const _alignmentLines = [];
            let isVerticalAdsorbed = false;
            let isHorizontalAdsorbed = false;
            for(let i = 0; i < horizontalLines.length; i++){
                const { value, range } = horizontalLines[i];
                const min = Math.min(...range, targetMinX, targetMaxX);
                const max = Math.max(...range, targetMinX, targetMaxX);
                if (Math.abs(targetMinY - value) < sorptionRange && !isHorizontalAdsorbed) {
                    targetTop = targetTop - (targetMinY - value);
                    isHorizontalAdsorbed = true;
                    _alignmentLines.push({
                        type: 'horizontal',
                        axis: {
                            x: min - 50,
                            y: value
                        },
                        length: max - min + 100
                    });
                }
                if (Math.abs(targetMaxY - value) < sorptionRange && !isHorizontalAdsorbed) {
                    targetTop = targetTop - (targetMaxY - value);
                    isHorizontalAdsorbed = true;
                    _alignmentLines.push({
                        type: 'horizontal',
                        axis: {
                            x: min - 50,
                            y: value
                        },
                        length: max - min + 100
                    });
                }
                if (Math.abs(targetCenterY - value) < sorptionRange && !isHorizontalAdsorbed) {
                    targetTop = targetTop - (targetCenterY - value);
                    isHorizontalAdsorbed = true;
                    _alignmentLines.push({
                        type: 'horizontal',
                        axis: {
                            x: min - 50,
                            y: value
                        },
                        length: max - min + 100
                    });
                }
            }
            for(let i = 0; i < verticalLines.length; i++){
                const { value, range } = verticalLines[i];
                const min = Math.min(...range, targetMinY, targetMaxY);
                const max = Math.max(...range, targetMinY, targetMaxY);
                if (Math.abs(targetMinX - value) < sorptionRange && !isVerticalAdsorbed) {
                    targetLeft = targetLeft - (targetMinX - value);
                    isVerticalAdsorbed = true;
                    _alignmentLines.push({
                        type: 'vertical',
                        axis: {
                            x: value,
                            y: min - 50
                        },
                        length: max - min + 100
                    });
                }
                if (Math.abs(targetMaxX - value) < sorptionRange && !isVerticalAdsorbed) {
                    targetLeft = targetLeft - (targetMaxX - value);
                    isVerticalAdsorbed = true;
                    _alignmentLines.push({
                        type: 'vertical',
                        axis: {
                            x: value,
                            y: min - 50
                        },
                        length: max - min + 100
                    });
                }
                if (Math.abs(targetCenterX - value) < sorptionRange && !isVerticalAdsorbed) {
                    targetLeft = targetLeft - (targetCenterX - value);
                    isVerticalAdsorbed = true;
                    _alignmentLines.push({
                        type: 'vertical',
                        axis: {
                            x: value,
                            y: min - 50
                        },
                        length: max - min + 100
                    });
                }
            }
            setAlignmentLines(_alignmentLines);
            let newElements;
            // In single-select mode or when the active group element is being operated, only update that element's position
            if (activeElementIdList.length === 1 || isActiveGroupElement) {
                newElements = elementListRef.current.map((el)=>{
                    if (el.id === element.id) {
                        return {
                            ...el,
                            left: targetLeft,
                            top: targetTop
                        };
                    }
                    return el;
                });
            } else {
                const handleElement = elementListRef.current.find((el)=>el.id === element.id);
                if (!handleElement) return;
                newElements = elementListRef.current.map((el)=>{
                    if (activeElementIdList.includes(el.id)) {
                        if (el.id === element.id) {
                            return {
                                ...el,
                                left: targetLeft,
                                top: targetTop
                            };
                        }
                        return {
                            ...el,
                            left: el.left + (targetLeft - handleElement.left),
                            top: el.top + (targetTop - handleElement.top)
                        };
                    }
                    return el;
                });
            }
            // Update both ref (latest value) and state (trigger re-render)
            elementListRef.current = newElements;
            setElementList(newElements);
        };
        const handleMouseUp = (e)=>{
            isMouseDown = false;
            document.ontouchmove = null;
            document.ontouchend = null;
            document.onmousemove = null;
            document.onmouseup = null;
            setAlignmentLines([]);
            const currentPageX = e instanceof MouseEvent ? e.pageX : e.changedTouches[0].pageX;
            const currentPageY = e instanceof MouseEvent ? e.pageY : e.changedTouches[0].pageY;
            if (startPageX === currentPageX && startPageY === currentPageY) return;
            updateSlide({
                elements: elementListRef.current
            });
            addHistorySnapshot();
        };
        if (isTouchEvent) {
            document.ontouchmove = handleMouseMove;
            document.ontouchend = handleMouseUp;
        } else {
            document.onmousemove = handleMouseMove;
            document.onmouseup = handleMouseUp;
        }
    }, [
        activeElementIdList,
        activeGroupElementId,
        shiftKeyState,
        canvasScale,
        elementListRef,
        setElementList,
        setAlignmentLines,
        updateSlide,
        addHistorySnapshot,
        viewportRatio,
        viewportSize
    ]);
    return {
        dragElement
    };
}
}),
"[project]/components/slide-renderer/Editor/Canvas/hooks/useRotateElement.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRotateElement",
    ()=>useRotateElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$history$2d$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-history-snapshot.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-canvas-operations.ts [app-ssr] (ecmascript)");
;
;
;
/**
 * Calculate the angle (in radians) of the line from the origin to the given coordinates
 * @param x Coordinate x
 * @param y Coordinate y
 */ const getAngleFromCoordinate = (x, y)=>{
    const radian = Math.atan2(x, y);
    const angle = 180 / Math.PI * radian;
    return angle;
};
function useRotateElement(elementListRef, setElementList, viewportRef, canvasScale) {
    const updateSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasOperations"])().updateSlide;
    const { addHistorySnapshot } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$history$2d$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHistorySnapshot"])();
    // Rotate element
    const rotateElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, element)=>{
        const native = e.nativeEvent;
        const isTouchEvent = native instanceof TouchEvent;
        if (isTouchEvent && !native.changedTouches?.length) return;
        let isMouseDown = true;
        let angle = 0;
        const elOriginRotate = element.rotate || 0;
        const elLeft = element.left;
        const elTop = element.top;
        const elWidth = element.width;
        const elHeight = element.height;
        // Element center point (rotation center)
        const centerX = elLeft + elWidth / 2;
        const centerY = elTop + elHeight / 2;
        if (!viewportRef.current) return;
        const viewportRect = viewportRef.current.getBoundingClientRect();
        const handleMouseMove = (e)=>{
            if (!isMouseDown) return;
            const currentPageX = e instanceof MouseEvent ? e.pageX : e.changedTouches[0].pageX;
            const currentPageY = e instanceof MouseEvent ? e.pageY : e.changedTouches[0].pageY;
            // Calculate the angle of the line from the current mouse position to the element center
            const mouseX = (currentPageX - viewportRect.left) / canvasScale;
            const mouseY = (currentPageY - viewportRect.top) / canvasScale;
            const x = mouseX - centerX;
            const y = centerY - mouseY;
            angle = getAngleFromCoordinate(x, y);
            // Snap to multiples of 45 degrees when close
            const sorptionRange = 5;
            if (Math.abs(angle) <= sorptionRange) angle = 0;
            else if (angle > 0 && Math.abs(angle - 45) <= sorptionRange) angle -= angle - 45;
            else if (angle < 0 && Math.abs(angle + 45) <= sorptionRange) angle -= angle + 45;
            else if (angle > 0 && Math.abs(angle - 90) <= sorptionRange) angle -= angle - 90;
            else if (angle < 0 && Math.abs(angle + 90) <= sorptionRange) angle -= angle + 90;
            else if (angle > 0 && Math.abs(angle - 135) <= sorptionRange) angle -= angle - 135;
            else if (angle < 0 && Math.abs(angle + 135) <= sorptionRange) angle -= angle + 135;
            else if (angle > 0 && Math.abs(angle - 180) <= sorptionRange) angle -= angle - 180;
            else if (angle < 0 && Math.abs(angle + 180) <= sorptionRange) angle -= angle + 180;
            const newElements = elementListRef.current.map((el)=>{
                if (el.id === element.id && 'rotate' in el) {
                    return {
                        ...el,
                        rotate: angle
                    };
                }
                return el;
            });
            // Update both ref and state
            elementListRef.current = newElements;
            setElementList(newElements);
        };
        const handleMouseUp = ()=>{
            isMouseDown = false;
            document.onmousemove = null;
            document.onmouseup = null;
            document.ontouchmove = null;
            document.ontouchend = null;
            if (elOriginRotate === angle) return;
            updateSlide({
                elements: elementListRef.current
            });
            addHistorySnapshot();
        };
        if (isTouchEvent) {
            document.ontouchmove = handleMouseMove;
            document.ontouchend = handleMouseUp;
        } else {
            document.onmousemove = handleMouseMove;
            document.onmouseup = handleMouseUp;
        }
    }, [
        elementListRef,
        setElementList,
        viewportRef,
        canvasScale,
        updateSlide,
        addHistorySnapshot
    ]);
    return {
        rotateElement
    };
}
}),
"[project]/components/slide-renderer/Editor/Canvas/hooks/useMouseSelection.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMouseSelection",
    ()=>useMouseSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/keyboard.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/element.ts [app-ssr] (ecmascript)");
;
;
;
;
function useMouseSelection(elementListRef, viewportRef) {
    const [mouseSelectionVisible, setMouseSelectionVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mouseSelectionQuadrant, setMouseSelectionQuadrant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [mouseSelection, setMouseSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0,
        width: 0,
        height: 0
    });
    const canvasScale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasScale();
    const hiddenElementIdList = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.hiddenElementIdList();
    const setActiveElementIdList = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setActiveElementIdList();
    const ctrlOrShiftKeyActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKeyboardStore"])((state)=>state.ctrlOrShiftKeyActive());
    // Update mouse selection range
    const updateMouseSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!viewportRef.current) return;
        let isMouseDown = true;
        const viewportRect = viewportRef.current.getBoundingClientRect();
        const minSelectionRange = 5;
        const startPageX = e.pageX;
        const startPageY = e.pageY;
        const left = (startPageX - viewportRect.x) / canvasScale;
        const top = (startPageY - viewportRect.y) / canvasScale;
        // Initialize selection start position and defaults
        setMouseSelection({
            top: top,
            left: left,
            width: 0,
            height: 0
        });
        setMouseSelectionVisible(false);
        setMouseSelectionQuadrant(4);
        const handleMouseMove = (e)=>{
            if (!isMouseDown) return;
            const currentPageX = e.pageX;
            const currentPageY = e.pageY;
            const offsetWidth = (currentPageX - startPageX) / canvasScale;
            const offsetHeight = (currentPageY - startPageY) / canvasScale;
            const width = Math.abs(offsetWidth);
            const height = Math.abs(offsetHeight);
            if (width < minSelectionRange || height < minSelectionRange) return;
            // Determine mouse selection (movement) direction
            // Classified by quadrant position, e.g. bottom-right is quadrant 4
            let quadrant = 0;
            if (offsetWidth > 0 && offsetHeight > 0) quadrant = 4;
            else if (offsetWidth < 0 && offsetHeight < 0) quadrant = 2;
            else if (offsetWidth > 0 && offsetHeight < 0) quadrant = 1;
            else if (offsetWidth < 0 && offsetHeight > 0) quadrant = 3;
            // Update selection range
            setMouseSelection((prev)=>({
                    ...prev,
                    width: width,
                    height: height
                }));
            setMouseSelectionVisible(true);
            setMouseSelectionQuadrant(quadrant);
        };
        const handleMouseUp = ()=>{
            document.onmousemove = null;
            document.onmouseup = null;
            isMouseDown = false;
            // Check which canvas elements are within the mouse selection range and set them as selected
            let inRangeElementList = [];
            for (const element of elementListRef.current){
                const mouseSelectionLeft = mouseSelection.left;
                const mouseSelectionTop = mouseSelection.top;
                const mouseSelectionWidth = mouseSelection.width;
                const mouseSelectionHeight = mouseSelection.height;
                const { minX, maxX, minY, maxY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementRange"])(element);
                // Inclusion check differs for each quadrant direction
                let isInclude = false;
                if (ctrlOrShiftKeyActive) {
                    if (mouseSelectionQuadrant === 4) {
                        isInclude = maxX > mouseSelectionLeft && minX < mouseSelectionLeft + mouseSelectionWidth && maxY > mouseSelectionTop && minY < mouseSelectionTop + mouseSelectionHeight;
                    } else if (mouseSelectionQuadrant === 2) {
                        isInclude = maxX > mouseSelectionLeft - mouseSelectionWidth && minX < mouseSelectionLeft - mouseSelectionWidth + mouseSelectionWidth && maxY > mouseSelectionTop - mouseSelectionHeight && minY < mouseSelectionTop - mouseSelectionHeight + mouseSelectionHeight;
                    } else if (mouseSelectionQuadrant === 1) {
                        isInclude = maxX > mouseSelectionLeft && minX < mouseSelectionLeft + mouseSelectionWidth && maxY > mouseSelectionTop - mouseSelectionHeight && minY < mouseSelectionTop - mouseSelectionHeight + mouseSelectionHeight;
                    } else if (mouseSelectionQuadrant === 3) {
                        isInclude = maxX > mouseSelectionLeft - mouseSelectionWidth && minX < mouseSelectionLeft - mouseSelectionWidth + mouseSelectionWidth && maxY > mouseSelectionTop && minY < mouseSelectionTop + mouseSelectionHeight;
                    }
                } else {
                    if (mouseSelectionQuadrant === 4) {
                        isInclude = minX > mouseSelectionLeft && maxX < mouseSelectionLeft + mouseSelectionWidth && minY > mouseSelectionTop && maxY < mouseSelectionTop + mouseSelectionHeight;
                    } else if (mouseSelectionQuadrant === 2) {
                        isInclude = minX > mouseSelectionLeft - mouseSelectionWidth && maxX < mouseSelectionLeft - mouseSelectionWidth + mouseSelectionWidth && minY > mouseSelectionTop - mouseSelectionHeight && maxY < mouseSelectionTop - mouseSelectionHeight + mouseSelectionHeight;
                    } else if (mouseSelectionQuadrant === 1) {
                        isInclude = minX > mouseSelectionLeft && maxX < mouseSelectionLeft + mouseSelectionWidth && minY > mouseSelectionTop - mouseSelectionHeight && maxY < mouseSelectionTop - mouseSelectionHeight + mouseSelectionHeight;
                    } else if (mouseSelectionQuadrant === 3) {
                        isInclude = minX > mouseSelectionLeft - mouseSelectionWidth && maxX < mouseSelectionLeft - mouseSelectionWidth + mouseSelectionWidth && minY > mouseSelectionTop && maxY < mouseSelectionTop + mouseSelectionHeight;
                    }
                }
                // Locked or hidden elements should not be selected even if within range
                if (isInclude && !element.lock && !hiddenElementIdList.includes(element.id)) inRangeElementList.push(element);
            }
            // If grouped elements are in range, all members of the group must be in range to be selected
            inRangeElementList = inRangeElementList.filter((inRangeElement)=>{
                if (inRangeElement.groupId) {
                    const inRangeElementIdList = inRangeElementList.map((inRangeElement)=>inRangeElement.id);
                    const groupElementList = elementListRef.current.filter((element)=>element.groupId === inRangeElement.groupId);
                    return groupElementList.every((groupElement)=>inRangeElementIdList.includes(groupElement.id));
                }
                return true;
            });
            const inRangeElementIdList = inRangeElementList.map((inRangeElement)=>inRangeElement.id);
            setActiveElementIdList(inRangeElementIdList);
            setMouseSelectionVisible(false);
        };
        document.onmousemove = handleMouseMove;
        document.onmouseup = handleMouseUp;
    }, // eslint-disable-next-line react-hooks/exhaustive-deps -- Intentionally excludes mouseSelection state to avoid infinite re-creation
    [
        viewportRef,
        canvasScale,
        ctrlOrShiftKeyActive,
        hiddenElementIdList,
        elementListRef,
        setActiveElementIdList
    ]);
    return {
        mouseSelection,
        mouseSelectionVisible,
        mouseSelectionQuadrant,
        updateMouseSelection
    };
}
}),
"[project]/components/slide-renderer/Editor/Canvas/hooks/useScaleElement.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScaleElement",
    ()=>useScaleElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/keyboard.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/edit.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/element.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$shapes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/shapes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/element.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$history$2d$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-history-snapshot.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-canvas-operations.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
/**
 * Calculate the positions of the eight scale points of a rotated element
 * @param element Original position and size of the element
 * @param angle Rotation angle
 */ const getRotateElementPoints = (element, angle)=>{
    const { left, top, width, height } = element;
    const radius = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2;
    const auxiliaryAngle = Math.atan(height / width) * 180 / Math.PI;
    const tlbraRadian = (180 - angle - auxiliaryAngle) * Math.PI / 180;
    const trblaRadian = (auxiliaryAngle - angle) * Math.PI / 180;
    const taRadian = (90 - angle) * Math.PI / 180;
    const raRadian = angle * Math.PI / 180;
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const middleLeft = left + halfWidth;
    const middleTop = top + halfHeight;
    const leftTopPoint = {
        left: middleLeft + radius * Math.cos(tlbraRadian),
        top: middleTop - radius * Math.sin(tlbraRadian)
    };
    const topPoint = {
        left: middleLeft + halfHeight * Math.cos(taRadian),
        top: middleTop - halfHeight * Math.sin(taRadian)
    };
    const rightTopPoint = {
        left: middleLeft + radius * Math.cos(trblaRadian),
        top: middleTop - radius * Math.sin(trblaRadian)
    };
    const rightPoint = {
        left: middleLeft + halfWidth * Math.cos(raRadian),
        top: middleTop + halfWidth * Math.sin(raRadian)
    };
    const rightBottomPoint = {
        left: middleLeft - radius * Math.cos(tlbraRadian),
        top: middleTop + radius * Math.sin(tlbraRadian)
    };
    const bottomPoint = {
        left: middleLeft - halfHeight * Math.sin(raRadian),
        top: middleTop + halfHeight * Math.cos(raRadian)
    };
    const leftBottomPoint = {
        left: middleLeft - radius * Math.cos(trblaRadian),
        top: middleTop + radius * Math.sin(trblaRadian)
    };
    const leftPoint = {
        left: middleLeft - halfWidth * Math.cos(raRadian),
        top: middleTop - halfWidth * Math.sin(raRadian)
    };
    return {
        leftTopPoint,
        topPoint,
        rightTopPoint,
        rightPoint,
        rightBottomPoint,
        bottomPoint,
        leftBottomPoint,
        leftPoint
    };
};
/**
 * Get the opposite point of a given scale point, e.g. [top] corresponds to [bottom], [left-top] corresponds to [right-bottom]
 * @param direction The current scale point being operated
 * @param points Positions of the eight scale points of the rotated element
 */ const getOppositePoint = (direction, points)=>{
    const oppositeMap = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_BOTTOM]: points.leftTopPoint,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_BOTTOM]: points.rightTopPoint,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_TOP]: points.rightBottomPoint,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_TOP]: points.leftBottomPoint,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].TOP]: points.bottomPoint,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].BOTTOM]: points.topPoint,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT]: points.rightPoint,
        [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT]: points.leftPoint
    };
    return oppositeMap[direction];
};
function useScaleElement(elementListRef, setElementList, setAlignmentLines) {
    const setScalingState = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setScalingState();
    const activeElementIdList = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.activeElementIdList();
    const activeGroupElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.activeGroupElementId();
    const canvasScale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasScale();
    const viewportRatio = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.viewportRatio();
    const viewportSize = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.viewportSize();
    const updateSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasOperations"])().updateSlide;
    const ctrlOrShiftKeyActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKeyboardStore"])((state)=>state.ctrlOrShiftKeyActive());
    const { addHistorySnapshot } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$history$2d$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHistorySnapshot"])();
    // Scale element
    const scaleElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, element, command)=>{
        const native = e.nativeEvent;
        const isTouchEvent = native instanceof TouchEvent;
        if (isTouchEvent && !native.changedTouches?.length) return;
        let isMouseDown = true;
        setScalingState(true);
        const elOriginLeft = element.left;
        const elOriginTop = element.top;
        const elOriginWidth = element.width;
        const elOriginHeight = element.height;
        const originTableCellMinHeight = element.type === 'table' ? element.cellMinHeight : 0;
        const elRotate = 'rotate' in element && element.rotate ? element.rotate : 0;
        const rotateRadian = Math.PI * elRotate / 180;
        const fixedRatio = ctrlOrShiftKeyActive || 'fixedRatio' in element && element.fixedRatio;
        const aspectRatio = elOriginWidth / elOriginHeight;
        const startPageX = isTouchEvent ? native.changedTouches[0].pageX : native.pageX;
        const startPageY = isTouchEvent ? native.changedTouches[0].pageY : native.pageY;
        // Minimum scale size limit for element
        const minSize = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MIN_SIZE"][element.type] || 20;
        const getSizeWithinRange = (size, type)=>{
            if (!fixedRatio) return size < minSize ? minSize : size;
            let minWidth = minSize;
            let minHeight = minSize;
            const ratio = element.width / element.height;
            if (ratio < 1) minHeight = minSize / ratio;
            if (ratio > 1) minWidth = minSize * ratio;
            if (type === 'width') return size < minWidth ? minWidth : size;
            return size < minHeight ? minHeight : size;
        };
        let points;
        let baseLeft = 0;
        let baseTop = 0;
        let horizontalLines = [];
        let verticalLines = [];
        // When scaling a rotated element, introduce a base point concept: the point opposite to the current scale handle
        // For example, when dragging the bottom-right corner, the top-left corner is the base point that stays fixed while other points move to achieve scaling
        if ('rotate' in element && element.rotate) {
            const { left, top, width, height } = element;
            points = getRotateElementPoints({
                left,
                top,
                width,
                height
            }, elRotate);
            const oppositePoint = getOppositePoint(command, points);
            baseLeft = oppositePoint.left;
            baseTop = oppositePoint.top;
        } else {
            const edgeWidth = viewportSize;
            const edgeHeight = viewportSize * viewportRatio;
            const isActiveGroupElement = element.id === activeGroupElementId;
            for (const el of elementListRef.current){
                if ('rotate' in el && el.rotate) continue;
                if (el.type === 'line') continue;
                if (isActiveGroupElement && el.id === element.id) continue;
                if (!isActiveGroupElement && activeElementIdList.includes(el.id)) continue;
                const left = el.left;
                const top = el.top;
                const width = el.width;
                const height = el.height;
                const right = left + width;
                const bottom = top + height;
                const topLine = {
                    value: top,
                    range: [
                        left,
                        right
                    ]
                };
                const bottomLine = {
                    value: bottom,
                    range: [
                        left,
                        right
                    ]
                };
                const leftLine = {
                    value: left,
                    range: [
                        top,
                        bottom
                    ]
                };
                const rightLine = {
                    value: right,
                    range: [
                        top,
                        bottom
                    ]
                };
                horizontalLines.push(topLine, bottomLine);
                verticalLines.push(leftLine, rightLine);
            }
            // Four edges of the visible canvas area, horizontal center, and vertical center
            const edgeTopLine = {
                value: 0,
                range: [
                    0,
                    edgeWidth
                ]
            };
            const edgeBottomLine = {
                value: edgeHeight,
                range: [
                    0,
                    edgeWidth
                ]
            };
            const edgeHorizontalCenterLine = {
                value: edgeHeight / 2,
                range: [
                    0,
                    edgeWidth
                ]
            };
            const edgeLeftLine = {
                value: 0,
                range: [
                    0,
                    edgeHeight
                ]
            };
            const edgeRightLine = {
                value: edgeWidth,
                range: [
                    0,
                    edgeHeight
                ]
            };
            const edgeVerticalCenterLine = {
                value: edgeWidth / 2,
                range: [
                    0,
                    edgeHeight
                ]
            };
            horizontalLines.push(edgeTopLine, edgeBottomLine, edgeHorizontalCenterLine);
            verticalLines.push(edgeLeftLine, edgeRightLine, edgeVerticalCenterLine);
            horizontalLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uniqAlignLines"])(horizontalLines);
            verticalLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uniqAlignLines"])(verticalLines);
        }
        // Alignment snapping method
        // Compare collected alignment snap lines with the target element's current position/size data; auto-correct when the difference is within threshold
        // Horizontal and vertical directions are calculated separately
        const alignedAdsorption = (currentX, currentY)=>{
            const sorptionRange = 5;
            const _alignmentLines = [];
            let isVerticalAdsorbed = false;
            let isHorizontalAdsorbed = false;
            const correctionVal = {
                offsetX: 0,
                offsetY: 0
            };
            if (currentY || currentY === 0) {
                for(let i = 0; i < horizontalLines.length; i++){
                    const { value, range } = horizontalLines[i];
                    const min = Math.min(...range, currentX || 0);
                    const max = Math.max(...range, currentX || 0);
                    if (Math.abs(currentY - value) < sorptionRange && !isHorizontalAdsorbed) {
                        correctionVal.offsetY = currentY - value;
                        isHorizontalAdsorbed = true;
                        _alignmentLines.push({
                            type: 'horizontal',
                            axis: {
                                x: min - 50,
                                y: value
                            },
                            length: max - min + 100
                        });
                    }
                }
            }
            if (currentX || currentX === 0) {
                for(let i = 0; i < verticalLines.length; i++){
                    const { value, range } = verticalLines[i];
                    const min = Math.min(...range, currentY || 0);
                    const max = Math.max(...range, currentY || 0);
                    if (Math.abs(currentX - value) < sorptionRange && !isVerticalAdsorbed) {
                        correctionVal.offsetX = currentX - value;
                        isVerticalAdsorbed = true;
                        _alignmentLines.push({
                            type: 'vertical',
                            axis: {
                                x: value,
                                y: min - 50
                            },
                            length: max - min + 100
                        });
                    }
                }
            }
            setAlignmentLines(_alignmentLines);
            return correctionVal;
        };
        const handleMouseMove = (e)=>{
            if (!isMouseDown) return;
            const currentPageX = e instanceof MouseEvent ? e.pageX : e.changedTouches[0].pageX;
            const currentPageY = e instanceof MouseEvent ? e.pageY : e.changedTouches[0].pageY;
            const x = currentPageX - startPageX;
            const y = currentPageY - startPageY;
            let width = elOriginWidth;
            let height = elOriginHeight;
            let left = elOriginLeft;
            let top = elOriginTop;
            // For rotated elements, recalculate the scaling distance based on the rotation angle (distance moved after mouse down)
            if (elRotate) {
                const revisedX = (Math.cos(rotateRadian) * x + Math.sin(rotateRadian) * y) / canvasScale;
                let revisedY = (Math.cos(rotateRadian) * y - Math.sin(rotateRadian) * x) / canvasScale;
                // Lock aspect ratio (only triggered by four corners, not edges)
                // Use horizontal scaling distance as the basis to calculate vertical scaling distance, maintaining the same ratio
                if (fixedRatio) {
                    if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_BOTTOM || command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_TOP) revisedY = revisedX / aspectRatio;
                    if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_BOTTOM || command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_TOP) revisedY = -revisedX / aspectRatio;
                }
                // Calculate element size and position after scaling based on the operation point
                // Note:
                // The position calculated here needs correction later, because scaling a rotated element changes the base point position (visually the base point stays fixed, but that's the combined result of rotation + translation)
                // However, the size does not need correction since the scaling distance was already recalculated above
                if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_BOTTOM) {
                    width = getSizeWithinRange(elOriginWidth + revisedX, 'width');
                    height = getSizeWithinRange(elOriginHeight + revisedY, 'height');
                } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_BOTTOM) {
                    width = getSizeWithinRange(elOriginWidth - revisedX, 'width');
                    height = getSizeWithinRange(elOriginHeight + revisedY, 'height');
                    left = elOriginLeft - (width - elOriginWidth);
                } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_TOP) {
                    width = getSizeWithinRange(elOriginWidth - revisedX, 'width');
                    height = getSizeWithinRange(elOriginHeight - revisedY, 'height');
                    left = elOriginLeft - (width - elOriginWidth);
                    top = elOriginTop - (height - elOriginHeight);
                } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_TOP) {
                    width = getSizeWithinRange(elOriginWidth + revisedX, 'width');
                    height = getSizeWithinRange(elOriginHeight - revisedY, 'height');
                    top = elOriginTop - (height - elOriginHeight);
                } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].TOP) {
                    height = getSizeWithinRange(elOriginHeight - revisedY, 'height');
                    top = elOriginTop - (height - elOriginHeight);
                } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].BOTTOM) {
                    height = getSizeWithinRange(elOriginHeight + revisedY, 'height');
                } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT) {
                    width = getSizeWithinRange(elOriginWidth - revisedX, 'width');
                    left = elOriginLeft - (width - elOriginWidth);
                } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT) {
                    width = getSizeWithinRange(elOriginWidth + revisedX, 'width');
                }
                // Get current base point coordinates, compare with initial base point, and correct element position by the difference
                const currentPoints = getRotateElementPoints({
                    width,
                    height,
                    left,
                    top
                }, elRotate);
                const currentOppositePoint = getOppositePoint(command, currentPoints);
                const currentBaseLeft = currentOppositePoint.left;
                const currentBaseTop = currentOppositePoint.top;
                const offsetX = currentBaseLeft - baseLeft;
                const offsetY = currentBaseTop - baseTop;
                left = left - offsetX;
                top = top - offsetY;
            } else {
                let moveX = x / canvasScale;
                let moveY = y / canvasScale;
                if (fixedRatio) {
                    if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_BOTTOM || command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_TOP) moveY = moveX / aspectRatio;
                    if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_BOTTOM || command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_TOP) moveY = -moveX / aspectRatio;
                }
                if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_BOTTOM) {
                    const { offsetX, offsetY } = alignedAdsorption(elOriginLeft + elOriginWidth + moveX, elOriginTop + elOriginHeight + moveY);
                    moveX = moveX - offsetX;
                    moveY = moveY - offsetY;
                    if (fixedRatio) {
                        if (offsetY) moveX = moveY * aspectRatio;
                        else moveY = moveX / aspectRatio;
                    }
                    width = getSizeWithinRange(elOriginWidth + moveX, 'width');
                    height = getSizeWithinRange(elOriginHeight + moveY, 'height');
                } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_BOTTOM) {
                    const { offsetX, offsetY } = alignedAdsorption(elOriginLeft + moveX, elOriginTop + elOriginHeight + moveY);
                    moveX = moveX - offsetX;
                    moveY = moveY - offsetY;
                    if (fixedRatio) {
                        if (offsetY) moveX = -moveY * aspectRatio;
                        else moveY = -moveX / aspectRatio;
                    }
                    width = getSizeWithinRange(elOriginWidth - moveX, 'width');
                    height = getSizeWithinRange(elOriginHeight + moveY, 'height');
                    left = elOriginLeft - (width - elOriginWidth);
                } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_TOP) {
                    const { offsetX, offsetY } = alignedAdsorption(elOriginLeft + moveX, elOriginTop + moveY);
                    moveX = moveX - offsetX;
                    moveY = moveY - offsetY;
                    if (fixedRatio) {
                        if (offsetY) moveX = moveY * aspectRatio;
                        else moveY = moveX / aspectRatio;
                    }
                    width = getSizeWithinRange(elOriginWidth - moveX, 'width');
                    height = getSizeWithinRange(elOriginHeight - moveY, 'height');
                    left = elOriginLeft - (width - elOriginWidth);
                    top = elOriginTop - (height - elOriginHeight);
                } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_TOP) {
                    const { offsetX, offsetY } = alignedAdsorption(elOriginLeft + elOriginWidth + moveX, elOriginTop + moveY);
                    moveX = moveX - offsetX;
                    moveY = moveY - offsetY;
                    if (fixedRatio) {
                        if (offsetY) moveX = -moveY * aspectRatio;
                        else moveY = -moveX / aspectRatio;
                    }
                    width = getSizeWithinRange(elOriginWidth + moveX, 'width');
                    height = getSizeWithinRange(elOriginHeight - moveY, 'height');
                    top = elOriginTop - (height - elOriginHeight);
                } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT) {
                    const { offsetX } = alignedAdsorption(elOriginLeft + moveX, null);
                    moveX = moveX - offsetX;
                    width = getSizeWithinRange(elOriginWidth - moveX, 'width');
                    left = elOriginLeft - (width - elOriginWidth);
                } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT) {
                    const { offsetX } = alignedAdsorption(elOriginLeft + elOriginWidth + moveX, null);
                    moveX = moveX - offsetX;
                    width = getSizeWithinRange(elOriginWidth + moveX, 'width');
                } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].TOP) {
                    const { offsetY } = alignedAdsorption(null, elOriginTop + moveY);
                    moveY = moveY - offsetY;
                    height = getSizeWithinRange(elOriginHeight - moveY, 'height');
                    top = elOriginTop - (height - elOriginHeight);
                } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].BOTTOM) {
                    const { offsetY } = alignedAdsorption(null, elOriginTop + elOriginHeight + moveY);
                    moveY = moveY - offsetY;
                    height = getSizeWithinRange(elOriginHeight + moveY, 'height');
                }
            }
            // Update local element list during mousemove
            const newElements = elementListRef.current.map((el)=>{
                if (element.id !== el.id) return el;
                if (el.type === 'shape' && 'pathFormula' in el && el.pathFormula) {
                    const pathFormula = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$shapes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHAPE_PATH_FORMULAS"][el.pathFormula];
                    let path = '';
                    if ('editable' in pathFormula) path = pathFormula.formula(width, height, el.keypoints);
                    else path = pathFormula.formula(width, height);
                    return {
                        ...el,
                        left,
                        top,
                        width,
                        height,
                        viewBox: [
                            width,
                            height
                        ],
                        path
                    };
                }
                if (el.type === 'table') {
                    let cellMinHeight = originTableCellMinHeight + (height - elOriginHeight) / el.data.length;
                    cellMinHeight = cellMinHeight < 36 ? 36 : cellMinHeight;
                    if (cellMinHeight === originTableCellMinHeight) return {
                        ...el,
                        left,
                        width
                    };
                    return {
                        ...el,
                        left,
                        top,
                        width,
                        height,
                        cellMinHeight: cellMinHeight < 36 ? 36 : cellMinHeight
                    };
                }
                return {
                    ...el,
                    left,
                    top,
                    width,
                    height
                };
            });
            // Update both ref and state
            elementListRef.current = newElements;
            setElementList(newElements);
        };
        const handleMouseUp = (e)=>{
            isMouseDown = false;
            document.ontouchmove = null;
            document.ontouchend = null;
            document.onmousemove = null;
            document.onmouseup = null;
            setAlignmentLines([]);
            const currentPageX = e instanceof MouseEvent ? e.pageX : e.changedTouches[0].pageX;
            const currentPageY = e instanceof MouseEvent ? e.pageY : e.changedTouches[0].pageY;
            if (startPageX === currentPageX && startPageY === currentPageY) return;
            setScalingState(false);
            updateSlide({
                elements: elementListRef.current
            });
            addHistorySnapshot();
        };
        if (isTouchEvent) {
            document.ontouchmove = handleMouseMove;
            document.ontouchend = handleMouseUp;
        } else {
            document.onmousemove = handleMouseMove;
            document.onmouseup = handleMouseUp;
        }
    }, [
        elementListRef,
        setElementList,
        canvasScale,
        activeElementIdList,
        activeGroupElementId,
        viewportRatio,
        viewportSize,
        ctrlOrShiftKeyActive,
        setScalingState,
        setAlignmentLines,
        updateSlide,
        addHistorySnapshot
    ]);
    // Scale multiple selected elements
    const scaleMultiElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, range, command)=>{
        let isMouseDown = true;
        const { minX, maxX, minY, maxY } = range;
        const operateWidth = maxX - minX;
        const operateHeight = maxY - minY;
        const aspectRatio = operateWidth / operateHeight;
        const startPageX = e.pageX;
        const startPageY = e.pageY;
        const originElementList = JSON.parse(JSON.stringify(elementListRef.current));
        const handleMouseMove = (e)=>{
            if (!isMouseDown) return;
            const currentPageX = e.pageX;
            const currentPageY = e.pageY;
            const x = (currentPageX - startPageX) / canvasScale;
            let y = (currentPageY - startPageY) / canvasScale;
            // Lock aspect ratio, same logic as above
            if (ctrlOrShiftKeyActive) {
                if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_BOTTOM || command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_TOP) y = x / aspectRatio;
                if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_BOTTOM || command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_TOP) y = -x / aspectRatio;
            }
            // Overall range of all selected elements
            let currentMinX = minX;
            let currentMaxX = maxX;
            let currentMinY = minY;
            let currentMaxY = maxY;
            if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_BOTTOM) {
                currentMaxX = maxX + x;
                currentMaxY = maxY + y;
            } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_BOTTOM) {
                currentMinX = minX + x;
                currentMaxY = maxY + y;
            } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_TOP) {
                currentMinX = minX + x;
                currentMinY = minY + y;
            } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_TOP) {
                currentMaxX = maxX + x;
                currentMinY = minY + y;
            } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].TOP) {
                currentMinY = minY + y;
            } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].BOTTOM) {
                currentMaxY = maxY + y;
            } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT) {
                currentMinX = minX + x;
            } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT) {
                currentMaxX = maxX + x;
            }
            // Overall width and height of all selected elements
            const currentOppositeWidth = currentMaxX - currentMinX;
            const currentOppositeHeight = currentMaxY - currentMinY;
            // Ratio of the currently operated element's width/height to the overall width/height of all selected elements
            let widthScale = currentOppositeWidth / operateWidth;
            let heightScale = currentOppositeHeight / operateHeight;
            if (widthScale <= 0) widthScale = 0;
            if (heightScale <= 0) heightScale = 0;
            // Calculate and update the position and size of all selected elements based on the computed ratio
            const newElements = elementListRef.current.map((el)=>{
                if ((el.type === 'image' || el.type === 'shape') && activeElementIdList.includes(el.id)) {
                    const originElement = originElementList.find((originEl)=>originEl.id === el.id);
                    return {
                        ...el,
                        width: originElement.width * widthScale,
                        height: originElement.height * heightScale,
                        left: currentMinX + (originElement.left - minX) * widthScale,
                        top: currentMinY + (originElement.top - minY) * heightScale
                    };
                }
                return el;
            });
            elementListRef.current = newElements;
            setElementList(newElements);
        };
        const handleMouseUp = (e)=>{
            isMouseDown = false;
            document.onmousemove = null;
            document.onmouseup = null;
            if (startPageX === e.pageX && startPageY === e.pageY) return;
            updateSlide({
                elements: elementListRef.current
            });
            addHistorySnapshot();
        };
        document.onmousemove = handleMouseMove;
        document.onmouseup = handleMouseUp;
    }, [
        elementListRef,
        setElementList,
        canvasScale,
        activeElementIdList,
        ctrlOrShiftKeyActive,
        updateSlide,
        addHistorySnapshot
    ]);
    return {
        scaleElement,
        scaleMultiElement
    };
}
}),
"[project]/components/slide-renderer/Editor/Canvas/hooks/useDragLineElement.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDragLineElement",
    ()=>useDragLineElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/keyboard.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/edit.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$history$2d$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-history-snapshot.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-canvas-operations.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
function useDragLineElement(elementListRef, setElementList) {
    const updateSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasOperations"])().updateSlide;
    const canvasScale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasScale();
    const ctrlOrShiftKeyActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKeyboardStore"])((state)=>state.ctrlOrShiftKeyActive());
    const { addHistorySnapshot } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$history$2d$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHistorySnapshot"])();
    // Drag line endpoint
    const dragLineElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, element, command)=>{
        let isMouseDown = true;
        const sorptionRange = 8;
        const startPageX = e.pageX;
        const startPageY = e.pageY;
        const adsorptionPoints = [];
        // Get the 8 scale points of all non-rotated, non-line elements as adsorption positions
        for(let i = 0; i < elementListRef.current.length; i++){
            const _element = elementListRef.current[i];
            if (_element.type === 'line' || _element.rotate) continue;
            const left = _element.left;
            const top = _element.top;
            const width = _element.width;
            const height = _element.height;
            const right = left + width;
            const bottom = top + height;
            const centerX = top + height / 2;
            const centerY = left + width / 2;
            const topPoint = {
                x: centerY,
                y: top
            };
            const bottomPoint = {
                x: centerY,
                y: bottom
            };
            const leftPoint = {
                x: left,
                y: centerX
            };
            const rightPoint = {
                x: right,
                y: centerX
            };
            const leftTopPoint = {
                x: left,
                y: top
            };
            const rightTopPoint = {
                x: right,
                y: top
            };
            const leftBottomPoint = {
                x: left,
                y: bottom
            };
            const rightBottomPoint = {
                x: right,
                y: bottom
            };
            adsorptionPoints.push(topPoint, bottomPoint, leftPoint, rightPoint, leftTopPoint, rightTopPoint, leftBottomPoint, rightBottomPoint);
        }
        const handleMouseMove = (e)=>{
            if (!isMouseDown) return;
            const currentPageX = e.pageX;
            const currentPageY = e.pageY;
            const moveX = (currentPageX - startPageX) / canvasScale;
            const moveY = (currentPageY - startPageY) / canvasScale;
            // Position of line start and end points in the editing area
            let startX = element.left + element.start[0];
            let startY = element.top + element.start[1];
            let endX = element.left + element.end[0];
            let endY = element.top + element.end[1];
            const mid = element.broken || element.broken2 || element.curve || [
                0,
                0
            ];
            let midX = element.left + mid[0];
            let midY = element.top + mid[1];
            const [c1, c2] = element.cubic || [
                [
                    0,
                    0
                ],
                [
                    0,
                    0
                ]
            ];
            let c1X = element.left + c1[0];
            let c1Y = element.top + c1[1];
            let c2X = element.left + c2[0];
            let c2Y = element.top + c2[1];
            // Drag start or end point position
            // Horizontal and vertical snapping
            if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateLineHandlers"].START) {
                startX = startX + moveX;
                startY = startY + moveY;
                if (Math.abs(startX - endX) < sorptionRange) startX = endX;
                if (Math.abs(startY - endY) < sorptionRange) startY = endY;
                for (const adsorptionPoint of adsorptionPoints){
                    const { x, y } = adsorptionPoint;
                    if (Math.abs(x - startX) < sorptionRange && Math.abs(y - startY) < sorptionRange) {
                        startX = x;
                        startY = y;
                        break;
                    }
                }
            } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateLineHandlers"].END) {
                endX = endX + moveX;
                endY = endY + moveY;
                if (Math.abs(startX - endX) < sorptionRange) endX = startX;
                if (Math.abs(startY - endY) < sorptionRange) endY = startY;
                for (const adsorptionPoint of adsorptionPoints){
                    const { x, y } = adsorptionPoint;
                    if (Math.abs(x - endX) < sorptionRange && Math.abs(y - endY) < sorptionRange) {
                        endX = x;
                        endY = y;
                        break;
                    }
                }
            } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateLineHandlers"].C) {
                midX = midX + moveX;
                midY = midY + moveY;
                if (Math.abs(midX - startX) < sorptionRange) midX = startX;
                if (Math.abs(midY - startY) < sorptionRange) midY = startY;
                if (Math.abs(midX - endX) < sorptionRange) midX = endX;
                if (Math.abs(midY - endY) < sorptionRange) midY = endY;
                if (Math.abs(midX - (startX + endX) / 2) < sorptionRange && Math.abs(midY - (startY + endY) / 2) < sorptionRange) {
                    midX = (startX + endX) / 2;
                    midY = (startY + endY) / 2;
                }
            } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateLineHandlers"].C1) {
                c1X = c1X + moveX;
                c1Y = c1Y + moveY;
                if (Math.abs(c1X - startX) < sorptionRange) c1X = startX;
                if (Math.abs(c1Y - startY) < sorptionRange) c1Y = startY;
                if (Math.abs(c1X - endX) < sorptionRange) c1X = endX;
                if (Math.abs(c1Y - endY) < sorptionRange) c1Y = endY;
            } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateLineHandlers"].C2) {
                c2X = c2X + moveX;
                c2Y = c2Y + moveY;
                if (Math.abs(c2X - startX) < sorptionRange) c2X = startX;
                if (Math.abs(c2Y - startY) < sorptionRange) c2Y = startY;
                if (Math.abs(c2X - endX) < sorptionRange) c2X = endX;
                if (Math.abs(c2Y - endY) < sorptionRange) c2Y = endY;
            }
            // Calculate updated start and end coordinates relative to the element's own position
            const minX = Math.min(startX, endX);
            const minY = Math.min(startY, endY);
            const maxX = Math.max(startX, endX);
            const maxY = Math.max(startY, endY);
            const start = [
                0,
                0
            ];
            const end = [
                maxX - minX,
                maxY - minY
            ];
            if (startX > endX) {
                start[0] = maxX - minX;
                end[0] = 0;
            }
            if (startY > endY) {
                start[1] = maxY - minY;
                end[1] = 0;
            }
            // Update local element list during mousemove
            const newElements = elementListRef.current.map((el)=>{
                if (el.id === element.id) {
                    const newEl = {
                        ...el,
                        left: minX,
                        top: minY,
                        start: start,
                        end: end
                    };
                    if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateLineHandlers"].START || command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateLineHandlers"].END) {
                        if (ctrlOrShiftKeyActive) {
                            if (element.broken) newEl.broken = [
                                midX - minX,
                                midY - minY
                            ];
                            if (element.curve) newEl.curve = [
                                midX - minX,
                                midY - minY
                            ];
                            if (element.cubic) newEl.cubic = [
                                [
                                    c1X - minX,
                                    c1Y - minY
                                ],
                                [
                                    c2X - minX,
                                    c2Y - minY
                                ]
                            ];
                        } else {
                            if (element.broken) newEl.broken = [
                                (start[0] + end[0]) / 2,
                                (start[1] + end[1]) / 2
                            ];
                            if (element.curve) newEl.curve = [
                                (start[0] + end[0]) / 2,
                                (start[1] + end[1]) / 2
                            ];
                            if (element.cubic) newEl.cubic = [
                                [
                                    (start[0] + end[0]) / 2,
                                    (start[1] + end[1]) / 2
                                ],
                                [
                                    (start[0] + end[0]) / 2,
                                    (start[1] + end[1]) / 2
                                ]
                            ];
                        }
                        if (element.broken2) newEl.broken2 = [
                            (start[0] + end[0]) / 2,
                            (start[1] + end[1]) / 2
                        ];
                    } else if (command === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateLineHandlers"].C) {
                        if (element.broken) newEl.broken = [
                            midX - minX,
                            midY - minY
                        ];
                        if (element.curve) newEl.curve = [
                            midX - minX,
                            midY - minY
                        ];
                        if (element.broken2) {
                            if (maxX - minX >= maxY - minY) newEl.broken2 = [
                                midX - minX,
                                newEl.broken2[1]
                            ];
                            else newEl.broken2 = [
                                newEl.broken2[0],
                                midY - minY
                            ];
                        }
                    } else {
                        if (element.cubic) newEl.cubic = [
                            [
                                c1X - minX,
                                c1Y - minY
                            ],
                            [
                                c2X - minX,
                                c2Y - minY
                            ]
                        ];
                    }
                    return newEl;
                }
                return el;
            });
            // Update both ref and state
            elementListRef.current = newElements;
            setElementList(newElements);
        };
        const handleMouseUp = (e)=>{
            isMouseDown = false;
            document.onmousemove = null;
            document.onmouseup = null;
            const currentPageX = e.pageX;
            const currentPageY = e.pageY;
            if (startPageX === currentPageX && startPageY === currentPageY) return;
            updateSlide({
                elements: elementListRef.current
            });
            addHistorySnapshot();
        };
        document.onmousemove = handleMouseMove;
        document.onmouseup = handleMouseUp;
    }, [
        elementListRef,
        setElementList,
        canvasScale,
        ctrlOrShiftKeyActive,
        updateSlide,
        addHistorySnapshot
    ]);
    return {
        dragLineElement
    };
}
}),
"[project]/components/slide-renderer/Editor/Canvas/hooks/useMoveShapeKeypoint.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMoveShapeKeypoint",
    ()=>useMoveShapeKeypoint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$history$2d$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-history-snapshot.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$shapes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/shapes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-canvas-operations.ts [app-ssr] (ecmascript)");
;
;
;
;
function useMoveShapeKeypoint(elementListRef, setElementList, canvasScale) {
    const updateSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasOperations"])().updateSlide;
    const { addHistorySnapshot } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$history$2d$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHistorySnapshot"])();
    const moveShapeKeypoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, element, index = 0)=>{
        const native = e.nativeEvent;
        const isTouchEvent = native instanceof TouchEvent;
        if (isTouchEvent && !native.changedTouches?.length) return;
        let isMouseDown = true;
        const startPageX = isTouchEvent ? native.changedTouches[0].pageX : native.pageX;
        const startPageY = isTouchEvent ? native.changedTouches[0].pageY : native.pageY;
        const originKeypoints = element.keypoints;
        const pathFormula = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$shapes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHAPE_PATH_FORMULAS"][element.pathFormula];
        let shapePathData = null;
        if ('editable' in pathFormula && pathFormula.editable) {
            const getBaseSize = pathFormula.getBaseSize[index];
            const range = pathFormula.range[index];
            const relative = pathFormula.relative[index];
            const keypoint = originKeypoints[index];
            const baseSize = getBaseSize(element.width, element.height);
            const originPos = baseSize * keypoint;
            const [min, max] = range;
            shapePathData = {
                baseSize,
                originPos,
                min,
                max,
                relative
            };
        }
        const handleMouseMove = (e)=>{
            if (!isMouseDown) return;
            const currentPageX = e instanceof MouseEvent ? e.pageX : e.changedTouches[0].pageX;
            const currentPageY = e instanceof MouseEvent ? e.pageY : e.changedTouches[0].pageY;
            const moveX = (currentPageX - startPageX) / canvasScale;
            const moveY = (currentPageY - startPageY) / canvasScale;
            // Update local element list during mousemove
            const newElements = elementListRef.current.map((el)=>{
                if (el.id === element.id && shapePathData) {
                    const { baseSize, originPos, min, max, relative } = shapePathData;
                    const shapeElement = el;
                    let keypoint = 0;
                    if (relative === 'center') keypoint = (originPos - moveX * 2) / baseSize;
                    else if (relative === 'left') keypoint = (originPos + moveX) / baseSize;
                    else if (relative === 'right') keypoint = (originPos - moveX) / baseSize;
                    else if (relative === 'top') keypoint = (originPos + moveY) / baseSize;
                    else if (relative === 'bottom') keypoint = (originPos - moveY) / baseSize;
                    else if (relative === 'left_bottom') keypoint = (originPos + moveX) / baseSize;
                    else if (relative === 'right_bottom') keypoint = (originPos - moveX) / baseSize;
                    else if (relative === 'top_right') keypoint = (originPos + moveY) / baseSize;
                    else if (relative === 'bottom_right') keypoint = (originPos - moveY) / baseSize;
                    if (keypoint < min) keypoint = min;
                    if (keypoint > max) keypoint = max;
                    let keypoints = [];
                    if (Array.isArray(originKeypoints)) {
                        keypoints = [
                            ...originKeypoints
                        ];
                        keypoints[index] = keypoint;
                    } else keypoints = [
                        keypoint
                    ];
                    return {
                        ...el,
                        keypoints,
                        path: pathFormula.formula(shapeElement.width, shapeElement.height, keypoints)
                    };
                }
                return el;
            });
            // Update both ref and state
            elementListRef.current = newElements;
            setElementList(newElements);
        };
        const handleMouseUp = (e)=>{
            isMouseDown = false;
            document.ontouchmove = null;
            document.ontouchend = null;
            document.onmousemove = null;
            document.onmouseup = null;
            const currentPageX = e instanceof MouseEvent ? e.pageX : e.changedTouches[0].pageX;
            const currentPageY = e instanceof MouseEvent ? e.pageY : e.changedTouches[0].pageY;
            if (startPageX === currentPageX && startPageY === currentPageY) return;
            updateSlide({
                elements: elementListRef.current
            });
            addHistorySnapshot();
        };
        if (isTouchEvent) {
            document.ontouchmove = handleMouseMove;
            document.ontouchend = handleMouseUp;
        } else {
            document.onmousemove = handleMouseMove;
            document.onmouseup = handleMouseUp;
        }
    }, [
        elementListRef,
        setElementList,
        canvasScale,
        updateSlide,
        addHistorySnapshot
    ]);
    return {
        moveShapeKeypoint
    };
}
}),
"[project]/components/slide-renderer/Editor/Canvas/hooks/useInsertFromCreateSelection.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInsertFromCreateSelection",
    ()=>useInsertFromCreateSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
;
;
function useInsertFromCreateSelection(viewportRef) {
    const canvasScale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasScale();
    const creatingElement = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.creatingElement();
    const setCreatingElement = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setCreatingElement();
    // Calculate selection position and size from the start and end points of mouse drag selection
    const formatCreateSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((selectionData)=>{
        const { start, end } = selectionData;
        if (!viewportRef.current) return;
        const viewportRect = viewportRef.current.getBoundingClientRect();
        const [startX, startY] = start;
        const [endX, endY] = end;
        const minX = Math.min(startX, endX);
        const maxX = Math.max(startX, endX);
        const minY = Math.min(startY, endY);
        const maxY = Math.max(startY, endY);
        const left = (minX - viewportRect.x) / canvasScale;
        const top = (minY - viewportRect.y) / canvasScale;
        const width = (maxX - minX) / canvasScale;
        const height = (maxY - minY) / canvasScale;
        return {
            left,
            top,
            width,
            height
        };
    }, [
        viewportRef,
        canvasScale
    ]);
    // Calculate line position and start/end points on canvas from the start and end points of mouse drag selection
    const formatCreateSelectionForLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((selectionData)=>{
        const { start, end } = selectionData;
        if (!viewportRef.current) return;
        const viewportRect = viewportRef.current.getBoundingClientRect();
        const [startX, startY] = start;
        const [endX, endY] = end;
        const minX = Math.min(startX, endX);
        const maxX = Math.max(startX, endX);
        const minY = Math.min(startY, endY);
        const maxY = Math.max(startY, endY);
        const left = (minX - viewportRect.x) / canvasScale;
        const top = (minY - viewportRect.y) / canvasScale;
        const width = (maxX - minX) / canvasScale;
        const height = (maxY - minY) / canvasScale;
        const _start = [
            startX === minX ? 0 : width,
            startY === minY ? 0 : height
        ];
        const _end = [
            endX === minX ? 0 : width,
            endY === minY ? 0 : height
        ];
        return {
            left,
            top,
            start: _start,
            end: _end
        };
    }, [
        viewportRef,
        canvasScale
    ]);
    // Insert element based on mouse selection position and size
    const insertElementFromCreateSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((selectionData)=>{
        if (!creatingElement) return;
        const type = creatingElement.type;
        if (type === 'text') {
            const position = formatCreateSelection(selectionData);
            if (position) {
            // TODO: Implement createTextElement
            }
        } else if (type === 'shape') {
            const position = formatCreateSelection(selectionData);
            if (position) {
            // TODO: Implement createShapeElement
            }
        } else if (type === 'line') {
            const position = formatCreateSelectionForLine(selectionData);
            if (position) {
            // TODO: Implement createLineElement
            }
        }
        setCreatingElement(null);
    }, [
        creatingElement,
        formatCreateSelection,
        formatCreateSelectionForLine,
        setCreatingElement
    ]);
    return {
        formatCreateSelection,
        insertElementFromCreateSelection
    };
}
}),
"[project]/components/slide-renderer/Editor/Canvas/hooks/useDrop.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDrop",
    ()=>useDrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
;
;
function useDrop(elementRef) {
    const disableHotkeys = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.disableHotkeys();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const element = elementRef.current;
        // Handle drop of elements/pages onto canvas
        const handleDrop = (e)=>{
            if (!e.dataTransfer || e.dataTransfer.items.length === 0) return;
            if (disableHotkeys) return;
            const firstItem = e.dataTransfer.items[0];
            if (firstItem && firstItem.kind === 'string' && firstItem.type === 'text/plain') {
                firstItem.getAsString((_text)=>{
                    if (disableHotkeys) return;
                // TODO: implement createTextElement
                });
            }
        };
        const preventDefault = (e)=>e.preventDefault();
        if (element) {
            element.addEventListener('drop', handleDrop);
        }
        document.addEventListener('dragleave', preventDefault);
        document.addEventListener('drop', preventDefault);
        document.addEventListener('dragenter', preventDefault);
        document.addEventListener('dragover', preventDefault);
        return ()=>{
            if (element) {
                element.removeEventListener('drop', handleDrop);
            }
            document.removeEventListener('dragleave', preventDefault);
            document.removeEventListener('drop', preventDefault);
            document.removeEventListener('dragenter', preventDefault);
            document.removeEventListener('dragover', preventDefault);
        };
    }, [
        elementRef,
        disableHotkeys
    ]);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/AlignmentLine.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlignmentLine",
    ()=>AlignmentLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function AlignmentLine({ type, axis, length, canvasScale }) {
    // Alignment line position
    const left = axis.x * canvasScale;
    const top = axis.y * canvasScale;
    // Alignment line length
    const sizeStyle = type === 'vertical' ? {
        height: `${length * canvasScale}px`
    } : {
        width: `${length * canvasScale}px`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "alignment-line absolute z-42",
        style: {
            left: `${left}px`,
            top: `${top}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `line ${type === 'vertical' ? 'border-l border-dashed border-primary -translate-x-0.5' : 'border-t border-dashed border-primary -translate-y-0.5'}`,
            style: sizeStyle
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/Editor/Canvas/AlignmentLine.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/AlignmentLine.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/MouseSelection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MouseSelection",
    ()=>MouseSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function MouseSelection({ top, left, width, height, quadrant, canvasScale }) {
    const selectionStyle = {
        left: `${(quadrant === 2 || quadrant === 3 ? left - width : left) * canvasScale}px`,
        top: `${(quadrant === 2 || quadrant === 1 ? top - height : top) * canvasScale}px`,
        width: `${width * canvasScale}px`,
        height: `${height * canvasScale}px`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mouse-selection absolute border-2 border-primary border-dashed z-41",
        style: selectionStyle
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/MouseSelection.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/ViewportBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ViewportBackground",
    ()=>ViewportBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contexts/scene-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$slide$2d$background$2d$style$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-slide-background-style.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function ViewportBackground() {
    // Subscribe only to background for performance
    const background = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneSelector"])((content)=>content.canvas.background);
    const { backgroundStyle: bgStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$slide$2d$background$2d$style$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSlideBackgroundStyle"])(background);
    const backgroundStyle = {
        ...bgStyle,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        pointerEvents: 'none'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "viewport-background",
        style: backgroundStyle
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/ViewportBackground.tsx",
        lineNumber: 29,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/ImageElement/ImageClipHandler.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageClipHandler",
    ()=>ImageClipHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.29.0_react@19.2.3/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/keyboard.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$hotkey$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/hotkey.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/edit.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function ImageClipHandler({ src, clipPath, width, height, rotate, clipData, onClip }) {
    const canvasScale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasScale();
    const ctrlOrShiftKeyActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKeyboardStore"])((state)=>state.ctrlOrShiftKeyActive());
    const [clipWrapperPositionStyle, setClipWrapperPositionStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: '0',
        left: '0'
    });
    const [isSettingClipRange, setIsSettingClipRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentRange, setCurrentRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Top image container position and size (clip highlight area)
    const [topImgWrapperPosition, setTopImgWrapperPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0,
        width: 0,
        height: 0
    });
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get clip area info (clip area's width/height ratio relative to the original image and its position within it)
    const getClipDataTransformInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const [start, end] = clipData ? clipData.range : [
            [
                0,
                0
            ],
            [
                100,
                100
            ]
        ];
        const widthScale = (end[0] - start[0]) / 100;
        const heightScale = (end[1] - start[1]) / 100;
        const left = start[0] / widthScale;
        const top = start[1] / heightScale;
        return {
            widthScale,
            heightScale,
            left,
            top
        };
    }, [
        clipData
    ]);
    // Bottom image position and size (masked area image)
    const imgPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const { widthScale, heightScale, left, top } = getClipDataTransformInfo();
        return {
            left: -left,
            top: -top,
            width: 100 / widthScale,
            height: 100 / heightScale
        };
    }, [
        getClipDataTransformInfo
    ]);
    // Bottom image position and size style (masked area image)
    const bottomImgPositionStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return {
            top: imgPosition.top + '%',
            left: imgPosition.left + '%',
            width: imgPosition.width + '%',
            height: imgPosition.height + '%'
        };
    }, [
        imgPosition
    ]);
    // Top image container position and size style (clip highlight area)
    const topImgWrapperPositionStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const { top, left, width, height } = topImgWrapperPosition;
        return {
            top: top + '%',
            left: left + '%',
            width: width + '%',
            height: height + '%'
        };
    }, [
        topImgWrapperPosition
    ]);
    // Top image position and size style (clipped area image)
    const topImgPositionStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const bottomWidth = imgPosition.width;
        const bottomHeight = imgPosition.height;
        const { top, left, width, height } = topImgWrapperPosition;
        return {
            left: -left * (100 / width) + '%',
            top: -top * (100 / height) + '%',
            width: bottomWidth / width * 100 + '%',
            height: bottomHeight / height * 100 + '%'
        };
    }, [
        imgPosition,
        topImgWrapperPosition
    ]);
    // Initialize clip position info
    const initClipPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const { left, top } = getClipDataTransformInfo();
        setTopImgWrapperPosition({
            left: left,
            top: top,
            width: 100,
            height: 100
        });
        setClipWrapperPositionStyle({
            top: -top + '%',
            left: -left + '%'
        });
    }, [
        getClipDataTransformInfo
    ]);
    // Perform clip: calculate the clipped image position/size and clip info, then emit the data
    const handleClip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isSettingClipRange) return;
        if (!currentRange) {
            onClip(null);
            return;
        }
        const { left, top } = getClipDataTransformInfo();
        const position = {
            left: (topImgWrapperPosition.left - left) / 100 * width,
            top: (topImgWrapperPosition.top - top) / 100 * height,
            width: (topImgWrapperPosition.width - 100) / 100 * width,
            height: (topImgWrapperPosition.height - 100) / 100 * height
        };
        const clipedEmitData = {
            range: currentRange,
            position
        };
        onClip(clipedEmitData);
    }, [
        isSettingClipRange,
        currentRange,
        getClipDataTransformInfo,
        topImgWrapperPosition,
        width,
        height,
        onClip
    ]);
    // Calculate and update clip area range data
    const updateRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const retPosition = {
            left: parseInt(topImgPositionStyle.left),
            top: parseInt(topImgPositionStyle.top),
            width: parseInt(topImgPositionStyle.width),
            height: parseInt(topImgPositionStyle.height)
        };
        const widthScale = 100 / retPosition.width;
        const heightScale = 100 / retPosition.height;
        const start = [
            -retPosition.left * widthScale,
            -retPosition.top * heightScale
        ];
        const end = [
            widthScale * 100 + start[0],
            heightScale * 100 + start[1]
        ];
        setCurrentRange([
            start,
            end
        ]);
    }, [
        topImgPositionStyle
    ]);
    // Move clip area
    const moveClipRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        setIsSettingClipRange(true);
        let isMouseDown = true;
        const startPageX = e.pageX;
        const startPageY = e.pageY;
        const bottomPosition = imgPosition;
        const originPosition = {
            ...topImgWrapperPosition
        };
        const handleMouseMove = (e)=>{
            if (!isMouseDown) return;
            const currentPageX = e.pageX;
            const currentPageY = e.pageY;
            const _moveX = (currentPageX - startPageX) / canvasScale;
            const _moveY = (currentPageY - startPageY) / canvasScale;
            const _moveL = Math.sqrt(_moveX * _moveX + _moveY * _moveY);
            const _moveLRotate = Math.atan2(_moveY, _moveX);
            const rotateRad = _moveLRotate - rotate / 180 * Math.PI;
            const moveX = _moveL * Math.cos(rotateRad) / width * 100;
            const moveY = _moveL * Math.sin(rotateRad) / height * 100;
            let targetLeft = originPosition.left + moveX;
            let targetTop = originPosition.top + moveY;
            if (targetLeft < 0) targetLeft = 0;
            else if (targetLeft + originPosition.width > bottomPosition.width) {
                targetLeft = bottomPosition.width - originPosition.width;
            }
            if (targetTop < 0) targetTop = 0;
            else if (targetTop + originPosition.height > bottomPosition.height) {
                targetTop = bottomPosition.height - originPosition.height;
            }
            setTopImgWrapperPosition({
                ...topImgWrapperPosition,
                left: targetLeft,
                top: targetTop
            });
        };
        const handleMouseUp = ()=>{
            isMouseDown = false;
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            updateRange();
            setTimeout(()=>{
                setIsSettingClipRange(false);
            }, 0);
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }, [
        canvasScale,
        rotate,
        width,
        height,
        imgPosition,
        topImgWrapperPosition,
        updateRange
    ]);
    // Scale clip area
    const scaleClipRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, type)=>{
        e.stopPropagation();
        setIsSettingClipRange(true);
        let isMouseDown = true;
        const minWidth = 50 / width * 100;
        const minHeight = 50 / height * 100;
        const startPageX = e.pageX;
        const startPageY = e.pageY;
        const bottomPosition = imgPosition;
        const originPosition = {
            ...topImgWrapperPosition
        };
        const aspectRatio = topImgWrapperPosition.width / topImgWrapperPosition.height;
        const handleMouseMove = (e)=>{
            if (!isMouseDown) return;
            const currentPageX = e.pageX;
            const currentPageY = e.pageY;
            const _moveX = (currentPageX - startPageX) / canvasScale;
            const _moveY = (currentPageY - startPageY) / canvasScale;
            const _moveL = Math.sqrt(_moveX * _moveX + _moveY * _moveY);
            const _moveLRotate = Math.atan2(_moveY, _moveX);
            const rotateRad = _moveLRotate - rotate / 180 * Math.PI;
            let moveX = _moveL * Math.cos(rotateRad) / width * 100;
            let moveY = _moveL * Math.sin(rotateRad) / height * 100;
            if (ctrlOrShiftKeyActive) {
                if (type === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_BOTTOM || type === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_TOP) moveY = moveX / aspectRatio;
                if (type === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_BOTTOM || type === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_TOP) moveY = -moveX / aspectRatio;
            }
            let targetLeft, targetTop, targetWidth, targetHeight;
            if (type === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_TOP) {
                if (originPosition.left + moveX < 0) {
                    moveX = -originPosition.left;
                }
                if (originPosition.top + moveY < 0) {
                    moveY = -originPosition.top;
                }
                if (originPosition.width - moveX < minWidth) {
                    moveX = originPosition.width - minWidth;
                }
                if (originPosition.height - moveY < minHeight) {
                    moveY = originPosition.height - minHeight;
                }
                targetWidth = originPosition.width - moveX;
                targetHeight = originPosition.height - moveY;
                targetLeft = originPosition.left + moveX;
                targetTop = originPosition.top + moveY;
            } else if (type === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_TOP) {
                if (originPosition.left + originPosition.width + moveX > bottomPosition.width) {
                    moveX = bottomPosition.width - (originPosition.left + originPosition.width);
                }
                if (originPosition.top + moveY < 0) {
                    moveY = -originPosition.top;
                }
                if (originPosition.width + moveX < minWidth) {
                    moveX = minWidth - originPosition.width;
                }
                if (originPosition.height - moveY < minHeight) {
                    moveY = originPosition.height - minHeight;
                }
                targetWidth = originPosition.width + moveX;
                targetHeight = originPosition.height - moveY;
                targetLeft = originPosition.left;
                targetTop = originPosition.top + moveY;
            } else if (type === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_BOTTOM) {
                if (originPosition.left + moveX < 0) {
                    moveX = -originPosition.left;
                }
                if (originPosition.top + originPosition.height + moveY > bottomPosition.height) {
                    moveY = bottomPosition.height - (originPosition.top + originPosition.height);
                }
                if (originPosition.width - moveX < minWidth) {
                    moveX = originPosition.width - minWidth;
                }
                if (originPosition.height + moveY < minHeight) {
                    moveY = minHeight - originPosition.height;
                }
                targetWidth = originPosition.width - moveX;
                targetHeight = originPosition.height + moveY;
                targetLeft = originPosition.left + moveX;
                targetTop = originPosition.top;
            } else if (type === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_BOTTOM) {
                if (originPosition.left + originPosition.width + moveX > bottomPosition.width) {
                    moveX = bottomPosition.width - (originPosition.left + originPosition.width);
                }
                if (originPosition.top + originPosition.height + moveY > bottomPosition.height) {
                    moveY = bottomPosition.height - (originPosition.top + originPosition.height);
                }
                if (originPosition.width + moveX < minWidth) {
                    moveX = minWidth - originPosition.width;
                }
                if (originPosition.height + moveY < minHeight) {
                    moveY = minHeight - originPosition.height;
                }
                targetWidth = originPosition.width + moveX;
                targetHeight = originPosition.height + moveY;
                targetLeft = originPosition.left;
                targetTop = originPosition.top;
            } else if (type === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].TOP) {
                if (originPosition.top + moveY < 0) {
                    moveY = -originPosition.top;
                }
                if (originPosition.height - moveY < minHeight) {
                    moveY = originPosition.height - minHeight;
                }
                targetWidth = originPosition.width;
                targetHeight = originPosition.height - moveY;
                targetLeft = originPosition.left;
                targetTop = originPosition.top + moveY;
            } else if (type === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].BOTTOM) {
                if (originPosition.top + originPosition.height + moveY > bottomPosition.height) {
                    moveY = bottomPosition.height - (originPosition.top + originPosition.height);
                }
                if (originPosition.height + moveY < minHeight) {
                    moveY = minHeight - originPosition.height;
                }
                targetWidth = originPosition.width;
                targetHeight = originPosition.height + moveY;
                targetLeft = originPosition.left;
                targetTop = originPosition.top;
            } else if (type === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT) {
                if (originPosition.left + moveX < 0) {
                    moveX = -originPosition.left;
                }
                if (originPosition.width - moveX < minWidth) {
                    moveX = originPosition.width - minWidth;
                }
                targetWidth = originPosition.width - moveX;
                targetHeight = originPosition.height;
                targetLeft = originPosition.left + moveX;
                targetTop = originPosition.top;
            } else {
                if (originPosition.left + originPosition.width + moveX > bottomPosition.width) {
                    moveX = bottomPosition.width - (originPosition.left + originPosition.width);
                }
                if (originPosition.width + moveX < minWidth) {
                    moveX = minWidth - originPosition.width;
                }
                targetHeight = originPosition.height;
                targetWidth = originPosition.width + moveX;
                targetLeft = originPosition.left;
                targetTop = originPosition.top;
            }
            setTopImgWrapperPosition({
                left: targetLeft,
                top: targetTop,
                width: targetWidth,
                height: targetHeight
            });
        };
        const handleMouseUp = ()=>{
            isMouseDown = false;
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            updateRange();
            setTimeout(()=>setIsSettingClipRange(false), 0);
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }, [
        canvasScale,
        rotate,
        width,
        height,
        imgPosition,
        topImgWrapperPosition,
        ctrlOrShiftKeyActive,
        updateRange
    ]);
    // Rotate class name
    const rotateClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const prefix = 'rotate-';
        if (rotate > -22.5 && rotate <= 22.5) return prefix + '0';
        else if (rotate > 22.5 && rotate <= 67.5) return prefix + '45';
        else if (rotate > 67.5 && rotate <= 112.5) return prefix + '90';
        else if (rotate > 112.5 && rotate <= 157.5) return prefix + '135';
        else if (rotate > 157.5 || rotate <= -157.5) return prefix + '0';
        else if (rotate > -157.5 && rotate <= -112.5) return prefix + '45';
        else if (rotate > -112.5 && rotate <= -67.5) return prefix + '90';
        else if (rotate > -67.5 && rotate <= -22.5) return prefix + '135';
        return prefix + '0';
    }, [
        rotate
    ]);
    const cornerPoint = [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_TOP,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_TOP,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_BOTTOM,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_BOTTOM
    ];
    const edgePoints = [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].TOP,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].BOTTOM,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT,
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT
    ];
    // Initialize on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        initClipPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Keyboard listener: Enter to confirm clip
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const keyboardListener = (e)=>{
            const key = e.key.toUpperCase();
            if (key === __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$hotkey$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYS"].ENTER) handleClip();
        };
        document.addEventListener('keydown', keyboardListener);
        return ()=>{
            document.removeEventListener('keydown', keyboardListener);
        };
    }, [
        handleClip
    ]);
    // Click outside listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (e)=>{
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                handleClip();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        handleClip
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapperRef,
        style: clipWrapperPositionStyle,
        className: "jsx-ae1de27381d70bbd" + " " + "image-clip-handler w-full h-full relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                draggable: false,
                alt: "",
                style: bottomImgPositionStyle,
                className: "jsx-ae1de27381d70bbd" + " " + "bottom-img absolute top-0 left-0 w-full h-full opacity-50"
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageClipHandler.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...topImgWrapperPositionStyle,
                    clipPath
                },
                className: "jsx-ae1de27381d70bbd" + " " + "top-image-content absolute overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: src,
                    draggable: false,
                    alt: "",
                    style: topImgPositionStyle,
                    className: "jsx-ae1de27381d70bbd" + " " + "top-img absolute w-full h-full"
                }, void 0, false, {
                    fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageClipHandler.tsx",
                    lineNumber: 526,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageClipHandler.tsx",
                lineNumber: 519,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: topImgWrapperPositionStyle,
                onMouseDown: (e)=>{
                    e.stopPropagation();
                    moveClipRange(e);
                },
                className: "jsx-ae1de27381d70bbd" + " " + "operate absolute w-full h-full top-0 left-0 cursor-move",
                children: [
                    cornerPoint.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onMouseDown: (e)=>scaleClipRange(e, point),
                            className: "jsx-ae1de27381d70bbd" + " " + `clip-point ${point} ${rotateClassName}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                fill: "#fff",
                                stroke: "#333",
                                className: "jsx-ae1de27381d70bbd",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeWidth: "0.3",
                                    shapeRendering: "crispEdges",
                                    d: "M 16 0 L 0 0 L 0 16 L 4 16 L 4 4 L 16 4 L 16 0 Z",
                                    className: "jsx-ae1de27381d70bbd"
                                }, void 0, false, {
                                    fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageClipHandler.tsx",
                                    lineNumber: 550,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageClipHandler.tsx",
                                lineNumber: 549,
                                columnNumber: 13
                            }, this)
                        }, point, false, {
                            fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageClipHandler.tsx",
                            lineNumber: 544,
                            columnNumber: 11
                        }, this)),
                    edgePoints.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onMouseDown: (e)=>scaleClipRange(e, point),
                            className: "jsx-ae1de27381d70bbd" + " " + `clip-point ${point} ${rotateClassName}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                fill: "#fff",
                                stroke: "#333",
                                className: "jsx-ae1de27381d70bbd",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeWidth: "0.3",
                                    shapeRendering: "crispEdges",
                                    d: "M 16 0 L 0 0 L 0 4 L 16 4 Z",
                                    className: "jsx-ae1de27381d70bbd"
                                }, void 0, false, {
                                    fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageClipHandler.tsx",
                                    lineNumber: 565,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageClipHandler.tsx",
                                lineNumber: 564,
                                columnNumber: 13
                            }, this)
                        }, point, false, {
                            fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageClipHandler.tsx",
                            lineNumber: 559,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageClipHandler.tsx",
                lineNumber: 535,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "ae1de27381d70bbd",
                children: ".clip-point.jsx-ae1de27381d70bbd{width:16px;height:16px;position:absolute}.clip-point.jsx-ae1de27381d70bbd svg.jsx-ae1de27381d70bbd{overflow:visible}.clip-point.left-top.jsx-ae1de27381d70bbd{top:0;left:0}.clip-point.right-top.jsx-ae1de27381d70bbd{transform-origin:0 0;top:0;left:100%;transform:rotate(90deg)}.clip-point.left-bottom.jsx-ae1de27381d70bbd{transform-origin:0 0;top:100%;left:0;transform:rotate(-90deg)}.clip-point.right-bottom.jsx-ae1de27381d70bbd{transform-origin:0 0;top:100%;left:100%;transform:rotate(180deg)}.clip-point.top.jsx-ae1de27381d70bbd{margin-left:-8px;top:0;left:50%}.clip-point.bottom.jsx-ae1de27381d70bbd{margin-left:-8px;bottom:0;left:50%;transform:rotate(180deg)}.clip-point.left.jsx-ae1de27381d70bbd{margin-top:-8px;top:50%;left:0;transform:rotate(-90deg)}.clip-point.right.jsx-ae1de27381d70bbd{margin-top:-8px;top:50%;right:0;transform:rotate(90deg)}.clip-point.left-top.rotate-0.jsx-ae1de27381d70bbd,.clip-point.right-bottom.rotate-0.jsx-ae1de27381d70bbd,.clip-point.left.rotate-45.jsx-ae1de27381d70bbd,.clip-point.right.rotate-45.jsx-ae1de27381d70bbd,.clip-point.left-bottom.rotate-90.jsx-ae1de27381d70bbd,.clip-point.right-top.rotate-90.jsx-ae1de27381d70bbd,.clip-point.top.rotate-135.jsx-ae1de27381d70bbd,.clip-point.bottom.rotate-135.jsx-ae1de27381d70bbd{cursor:nwse-resize}.clip-point.top.rotate-0.jsx-ae1de27381d70bbd,.clip-point.bottom.rotate-0.jsx-ae1de27381d70bbd,.clip-point.left-top.rotate-45.jsx-ae1de27381d70bbd,.clip-point.right-bottom.rotate-45.jsx-ae1de27381d70bbd,.clip-point.left.rotate-90.jsx-ae1de27381d70bbd,.clip-point.right.rotate-90.jsx-ae1de27381d70bbd,.clip-point.left-bottom.rotate-135.jsx-ae1de27381d70bbd,.clip-point.right-top.rotate-135.jsx-ae1de27381d70bbd{cursor:ns-resize}.clip-point.left-bottom.rotate-0.jsx-ae1de27381d70bbd,.clip-point.right-top.rotate-0.jsx-ae1de27381d70bbd,.clip-point.top.rotate-45.jsx-ae1de27381d70bbd,.clip-point.bottom.rotate-45.jsx-ae1de27381d70bbd,.clip-point.left-top.rotate-90.jsx-ae1de27381d70bbd,.clip-point.right-bottom.rotate-90.jsx-ae1de27381d70bbd,.clip-point.left.rotate-135.jsx-ae1de27381d70bbd,.clip-point.right.rotate-135.jsx-ae1de27381d70bbd{cursor:nesw-resize}.clip-point.left.rotate-0.jsx-ae1de27381d70bbd,.clip-point.right.rotate-0.jsx-ae1de27381d70bbd,.clip-point.left-bottom.rotate-45.jsx-ae1de27381d70bbd,.clip-point.right-top.rotate-45.jsx-ae1de27381d70bbd,.clip-point.top.rotate-90.jsx-ae1de27381d70bbd,.clip-point.bottom.rotate-90.jsx-ae1de27381d70bbd,.clip-point.left-top.rotate-135.jsx-ae1de27381d70bbd,.clip-point.right-bottom.rotate-135.jsx-ae1de27381d70bbd{cursor:ew-resize}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/slide-renderer/components/element/ImageElement/ImageClipHandler.tsx",
        lineNumber: 506,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/ImageElement/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageElement",
    ()=>ImageElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-canvas-operations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$history$2d$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-history-snapshot.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementShadow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementShadow.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementFlip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementFlip.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$useClipImage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ImageElement/useClipImage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$useFilter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ImageElement/useFilter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$ImageOutline$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ImageElement/ImageOutline/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$ImageClipHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ImageElement/ImageClipHandler.tsx [app-ssr] (ecmascript)");
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
function ImageElement({ elementInfo, selectElement }) {
    const clipingImageElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.clipingImageElementId();
    const setClipingImageElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setClipingImageElementId();
    const { updateElement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasOperations"])();
    const { addHistorySnapshot } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$history$2d$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHistorySnapshot"])();
    const { shadowStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementShadow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementShadow"])(elementInfo.shadow);
    const { flipStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementFlip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementFlip"])(elementInfo.flipH, elementInfo.flipV);
    const { clipShape, imgPosition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$useClipImage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClipImage"])(elementInfo);
    const { filter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$useFilter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFilter"])(elementInfo.filters);
    const isCliping = clipingImageElementId === elementInfo.id;
    const handleSelectElement = (e)=>{
        if (elementInfo.lock) return;
        e.stopPropagation();
        selectElement?.(e, elementInfo);
    };
    const handleClip = (data)=>{
        setClipingImageElementId('');
        if (!data) return;
        const { range, position } = data;
        const originClip = elementInfo.clip || {
            shape: 'rect',
            range: [
                [
                    0,
                    0
                ],
                [
                    100,
                    100
                ]
            ]
        };
        const left = elementInfo.left + position.left;
        const top = elementInfo.top + position.top;
        const width = elementInfo.width + position.width;
        const height = elementInfo.height + position.height;
        let centerOffsetX = 0;
        let centerOffsetY = 0;
        if (elementInfo.rotate) {
            const centerX = left + width / 2 - (elementInfo.left + elementInfo.width / 2);
            const centerY = -(top + height / 2 - (elementInfo.top + elementInfo.height / 2));
            const radian = -elementInfo.rotate * Math.PI / 180;
            const rotatedCenterX = centerX * Math.cos(radian) - centerY * Math.sin(radian);
            const rotatedCenterY = centerX * Math.sin(radian) + centerY * Math.cos(radian);
            centerOffsetX = rotatedCenterX - centerX;
            centerOffsetY = -(rotatedCenterY - centerY);
        }
        const props = {
            clip: {
                ...originClip,
                range
            },
            left: left + centerOffsetX,
            top: top + centerOffsetY,
            width,
            height
        };
        updateElement({
            id: elementInfo.id,
            props
        });
        addHistorySnapshot();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `editable-element-image absolute ${elementInfo.lock ? 'lock' : ''}`,
        style: {
            top: `${elementInfo.top}px`,
            left: `${elementInfo.left}px`,
            width: `${elementInfo.width}px`,
            height: `${elementInfo.height}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rotate-wrapper w-full h-full",
            style: {
                transform: `rotate(${elementInfo.rotate}deg)`
            },
            children: isCliping ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$ImageClipHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageClipHandler"], {
                src: elementInfo.src,
                clipData: elementInfo.clip,
                width: elementInfo.width,
                height: elementInfo.height,
                top: elementInfo.top,
                left: elementInfo.left,
                rotate: elementInfo.rotate,
                clipPath: clipShape.style,
                onClip: handleClip
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/components/element/ImageElement/index.tsx",
                lineNumber: 104,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `element-content w-full h-full relative ${elementInfo.lock ? '' : 'cursor-move'}`,
                style: {
                    filter: shadowStyle ? `drop-shadow(${shadowStyle})` : '',
                    transform: flipStyle
                },
                onMouseDown: handleSelectElement,
                onTouchStart: handleSelectElement,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$ImageOutline$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageOutline"], {
                        elementInfo: elementInfo
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/ImageElement/index.tsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "image-content w-full h-full overflow-hidden relative",
                        style: {
                            clipPath: clipShape.style
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: elementInfo.src,
                                draggable: false,
                                style: {
                                    position: 'absolute',
                                    top: imgPosition.top,
                                    left: imgPosition.left,
                                    width: imgPosition.width,
                                    height: imgPosition.height,
                                    filter
                                },
                                alt: "",
                                onDragStart: (e)=>e.preventDefault()
                            }, void 0, false, {
                                fileName: "[project]/components/slide-renderer/components/element/ImageElement/index.tsx",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this),
                            elementInfo.colorMask && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "color-mask absolute inset-0",
                                style: {
                                    backgroundColor: elementInfo.colorMask
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/slide-renderer/components/element/ImageElement/index.tsx",
                                lineNumber: 146,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/slide-renderer/components/element/ImageElement/index.tsx",
                        lineNumber: 127,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/slide-renderer/components/element/ImageElement/index.tsx",
                lineNumber: 116,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/ImageElement/index.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/ImageElement/index.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/ProsemirrorEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProsemirrorEditor",
    ()=>ProsemirrorEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$23$2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.23/node_modules/lodash/debounce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/keyboard.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/prosemirror-commands@1.7.1/node_modules/prosemirror-commands/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$emitter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/emitter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$commands$2f$setTextAlign$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/commands/setTextAlign.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$commands$2f$setTextIndent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/commands/setTextIndent.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$commands$2f$toggleList$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/commands/toggleList.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$commands$2f$setListStyle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/commands/setListStyle.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$commands$2f$replaceText$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prosemirror/commands/replaceText.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$hotkey$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/hotkey.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/sonner@2.0.7_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
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
const ProsemirrorEditor = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ elementId, defaultColor, defaultFontName, value, editable = false, autoFocus = false, onUpdate, onFocus, onBlur, onMouseDown }, ref)=>{
    const editorViewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const editorView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.handleElementId();
    const textFormatPainter = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.textFormatPainter();
    const richTextAttrs = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.richTextAttrs();
    const activeElementIdList = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.activeElementIdList();
    const setDisableHotkeysState = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setDisableHotkeysState();
    const setRichtextAttrs = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setRichtextAttrs();
    const setTextFormatPainter = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setTextFormatPainter();
    const ctrlOrShiftKeyActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKeyboardStore"])((state)=>state.ctrlOrShiftKeyActive());
    // Handle input with debounce
    const handleInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$23$2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((isHandleHistory = false)=>{
            if (!editorView.current) return;
            if (value.replace(/ style=""/g, '') === editorView.current.dom.innerHTML.replace(/ style=""/g, '')) return;
            onUpdate?.({
                value: editorView.current.dom.innerHTML,
                ignore: isHandleHistory
            });
        }, 300, {
            trailing: true
        }), [
        value,
        onUpdate
    ]);
    // Handle focus
    const handleFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Don't disable hotkeys if ctrl/shift is pressed and multiple elements are selected
        if (!ctrlOrShiftKeyActive || activeElementIdList.length <= 1) {
            setDisableHotkeysState(true);
        }
        onFocus?.();
    }, [
        ctrlOrShiftKeyActive,
        activeElementIdList.length,
        setDisableHotkeysState,
        onFocus
    ]);
    // Handle blur
    const handleBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setDisableHotkeysState(false);
        onBlur?.();
    }, [
        setDisableHotkeysState,
        onBlur
    ]);
    // Handle click
    // eslint-disable-next-line react-hooks/exhaustive-deps -- debounce returns a stable function reference
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$23$2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
        if (!editorView.current) return;
        const attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTextAttrs"])(editorView.current, {
            color: defaultColor,
            fontname: defaultFontName
        });
        setRichtextAttrs(attrs);
    }, 30, {
        trailing: true
    }), [
        defaultColor,
        defaultFontName,
        setRichtextAttrs
    ]);
    // Handle keydown
    const handleKeydown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((view, e)=>{
        const { ctrlKey, shiftKey, metaKey } = e;
        const ctrlActive = ctrlKey || shiftKey || metaKey;
        const key = e.key.toUpperCase();
        const isHandleHistory = ctrlActive && (key === __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$hotkey$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYS"].Z || key === __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$hotkey$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYS"].Y);
        handleInput(isHandleHistory);
        handleClick();
    }, [
        handleInput,
        handleClick
    ]);
    // Execute rich text command
    const execCommand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(({ target, action })=>{
        if (!editorView.current) return;
        if (!target && handleElementId !== elementId) return;
        if (target && target !== elementId) return;
        const actions = 'command' in action ? [
            action
        ] : action;
        for (const item of actions){
            if (item.command === 'fontname' && item.value !== undefined) {
                const mark = editorView.current.state.schema.marks.fontname.create({
                    fontname: item.value
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSelectAll"])(editorView.current);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMark"])(editorView.current, mark);
                if (item.value && !document.fonts.check(`16px ${item.value}`)) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning('Font is loading, please wait...');
                }
            } else if (item.command === 'fontsize' && item.value) {
                const mark = editorView.current.state.schema.marks.fontsize.create({
                    fontsize: item.value
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSelectAll"])(editorView.current);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMark"])(editorView.current, mark);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$commands$2f$setListStyle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setListStyle"])(editorView.current, {
                    key: 'fontsize',
                    value: item.value
                });
            } else if (item.command === 'fontsize-add') {
                const step = item.value ? +item.value : 2;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSelectAll"])(editorView.current);
                const fontsize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFontsize"])(editorView.current) + step + 'px';
                const mark = editorView.current.state.schema.marks.fontsize.create({
                    fontsize
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMark"])(editorView.current, mark);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$commands$2f$setListStyle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setListStyle"])(editorView.current, {
                    key: 'fontsize',
                    value: fontsize
                });
            } else if (item.command === 'fontsize-reduce') {
                const step = item.value ? +item.value : 2;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSelectAll"])(editorView.current);
                let fontsize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFontsize"])(editorView.current) - step;
                if (fontsize < 12) fontsize = 12;
                const mark = editorView.current.state.schema.marks.fontsize.create({
                    fontsize: fontsize + 'px'
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMark"])(editorView.current, mark);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$commands$2f$setListStyle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setListStyle"])(editorView.current, {
                    key: 'fontsize',
                    value: fontsize + 'px'
                });
            } else if (item.command === 'color' && item.value) {
                const mark = editorView.current.state.schema.marks.forecolor.create({
                    color: item.value
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSelectAll"])(editorView.current);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMark"])(editorView.current, mark);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$commands$2f$setListStyle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setListStyle"])(editorView.current, {
                    key: 'color',
                    value: item.value
                });
            } else if (item.command === 'backcolor' && item.value) {
                const mark = editorView.current.state.schema.marks.backcolor.create({
                    backcolor: item.value
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSelectAll"])(editorView.current);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMark"])(editorView.current, mark);
            } else if (item.command === 'bold') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSelectAll"])(editorView.current);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleMark"])(editorView.current.state.schema.marks.strong)(editorView.current.state, editorView.current.dispatch);
            } else if (item.command === 'em') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSelectAll"])(editorView.current);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleMark"])(editorView.current.state.schema.marks.em)(editorView.current.state, editorView.current.dispatch);
            } else if (item.command === 'underline') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSelectAll"])(editorView.current);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleMark"])(editorView.current.state.schema.marks.underline)(editorView.current.state, editorView.current.dispatch);
            } else if (item.command === 'strikethrough') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSelectAll"])(editorView.current);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleMark"])(editorView.current.state.schema.marks.strikethrough)(editorView.current.state, editorView.current.dispatch);
            } else if (item.command === 'subscript') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleMark"])(editorView.current.state.schema.marks.subscript)(editorView.current.state, editorView.current.dispatch);
            } else if (item.command === 'superscript') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleMark"])(editorView.current.state.schema.marks.superscript)(editorView.current.state, editorView.current.dispatch);
            } else if (item.command === 'blockquote') {
                const isBlockquote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isActiveOfParentNodeType"])('blockquote', editorView.current.state);
                if (isBlockquote) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lift"])(editorView.current.state, editorView.current.dispatch);
                else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["wrapIn"])(editorView.current.state.schema.nodes.blockquote)(editorView.current.state, editorView.current.dispatch);
            } else if (item.command === 'code') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleMark"])(editorView.current.state.schema.marks.code)(editorView.current.state, editorView.current.dispatch);
            } else if (item.command === 'align' && item.value) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$commands$2f$setTextAlign$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["alignmentCommand"])(editorView.current, item.value);
            } else if (item.command === 'indent' && item.value) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$commands$2f$setTextIndent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["indentCommand"])(editorView.current, +item.value);
            } else if (item.command === 'textIndent' && item.value) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$commands$2f$setTextIndent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textIndentCommand"])(editorView.current, +item.value);
            } else if (item.command === 'bulletList') {
                const listStyleType = item.value || '';
                const { bullet_list: bulletList, list_item: listItem } = editorView.current.state.schema.nodes;
                const textStyle = {
                    color: richTextAttrs.color,
                    fontsize: richTextAttrs.fontsize
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$commands$2f$toggleList$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleList"])(bulletList, listItem, listStyleType, textStyle)(editorView.current.state, editorView.current.dispatch);
            } else if (item.command === 'orderedList') {
                const listStyleType = item.value || '';
                const { ordered_list: orderedList, list_item: listItem } = editorView.current.state.schema.nodes;
                const textStyle = {
                    color: richTextAttrs.color,
                    fontsize: richTextAttrs.fontsize
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$commands$2f$toggleList$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleList"])(orderedList, listItem, listStyleType, textStyle)(editorView.current.state, editorView.current.dispatch);
            } else if (item.command === 'clear') {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSelectAll"])(editorView.current);
                const { $from, $to } = editorView.current.state.selection;
                editorView.current.dispatch(editorView.current.state.tr.removeMark($from.pos, $to.pos));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$commands$2f$setListStyle$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setListStyle"])(editorView.current, [
                    {
                        key: 'fontsize',
                        value: ''
                    },
                    {
                        key: 'color',
                        value: ''
                    }
                ]);
            } else if (item.command === 'link') {
                const markType = editorView.current.state.schema.marks.link;
                const { from, to } = editorView.current.state.selection;
                const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findNodesWithSameMark"])(editorView.current.state.doc, from, to, markType);
                if (result) {
                    if (item.value) {
                        const mark = editorView.current.state.schema.marks.link.create({
                            href: item.value,
                            title: item.value
                        });
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMark"])(editorView.current, mark, {
                            from: result.from.pos,
                            to: result.to.pos + 1
                        });
                    } else editorView.current.dispatch(editorView.current.state.tr.removeMark(result.from.pos, result.to.pos + 1, markType));
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markActive"])(editorView.current.state, markType)) {
                    if (item.value) {
                        const mark = editorView.current.state.schema.marks.link.create({
                            href: item.value,
                            title: item.value
                        });
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMark"])(editorView.current, mark);
                    } else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleMark"])(markType)(editorView.current.state, editorView.current.dispatch);
                } else if (item.value) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autoSelectAll"])(editorView.current);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$prosemirror$2d$commands$40$1$2e$7$2e$1$2f$node_modules$2f$prosemirror$2d$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleMark"])(markType, {
                        href: item.value,
                        title: item.value
                    })(editorView.current.state, editorView.current.dispatch);
                }
            } else if (item.command === 'insert' && item.value) {
                editorView.current.dispatch(editorView.current.state.tr.insertText(item.value));
            } else if (item.command === 'replace' && item.value) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$commands$2f$replaceText$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceText"])(editorView.current, item.value);
            }
        }
        editorView.current.focus();
        handleInput();
        handleClick();
    }, [
        handleElementId,
        elementId,
        richTextAttrs,
        handleInput,
        handleClick
    ]);
    // Handle mouseup for format painter
    const handleMouseup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!textFormatPainter || !editorView.current) return;
        const { keep, ...newProps } = textFormatPainter;
        const actions = [
            {
                command: 'clear'
            }
        ];
        for (const key of Object.keys(newProps)){
            const command = key;
            const value = textFormatPainter[key];
            if (value === true) actions.push({
                command
            });
            else if (value) actions.push({
                command,
                value
            });
        }
        execCommand({
            action: actions
        });
        if (!keep) setTextFormatPainter(null);
    }, [
        textFormatPainter,
        execCommand,
        setTextFormatPainter
    ]);
    // Sync attrs to store
    const syncAttrsToStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (handleElementId !== elementId) return;
        handleClick();
    }, [
        handleElementId,
        elementId,
        handleClick
    ]);
    // Initialize ProseMirror Editor
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!editorViewRef.current) return;
        editorView.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initProsemirrorEditor"])(editorViewRef.current, value, {
            handleDOMEvents: {
                focus: handleFocus,
                blur: handleBlur,
                keydown: handleKeydown,
                click: handleClick,
                mouseup: handleMouseup
            },
            editable: ()=>editable
        });
        if (autoFocus) {
            editorView.current.focus();
        }
        return ()=>{
            if (editorView.current) {
                editorView.current.destroy();
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Sync content to DOM
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!editorView.current) return;
        if (editorView.current.hasFocus()) return;
        const { doc, tr } = editorView.current.state;
        editorView.current.dispatch(tr.replaceRangeWith(0, doc.content.size, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prosemirror$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDocument"])(value)));
    }, [
        value
    ]);
    // Toggle editable mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!editorView.current) return;
        editorView.current.setProps({
            editable: ()=>editable
        });
    }, [
        editable
    ]);
    // Setup emitter listeners
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$emitter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].on(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$emitter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmitterEvents"].RICH_TEXT_COMMAND, execCommand);
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$emitter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].on(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$emitter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmitterEvents"].SYNC_RICH_TEXT_ATTRS_TO_STORE, syncAttrsToStore);
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$emitter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].off(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$emitter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmitterEvents"].RICH_TEXT_COMMAND, execCommand);
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$emitter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].off(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$emitter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmitterEvents"].SYNC_RICH_TEXT_ATTRS_TO_STORE, syncAttrsToStore);
        };
    }, [
        execCommand,
        syncAttrsToStore
    ]);
    // Expose focus method
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, ()=>({
            focus: ()=>{
                if (editorView.current) {
                    editorView.current.focus();
                }
            }
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: editorViewRef,
        className: `prosemirror-editor cursor-text ${textFormatPainter ? 'format-painter' : ''}`,
        onMouseDown: (e)=>onMouseDown?.(e)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/ProsemirrorEditor.tsx",
        lineNumber: 448,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
ProsemirrorEditor.displayName = 'ProsemirrorEditor';
}),
"[project]/components/slide-renderer/components/element/TextElement/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextElement",
    ()=>TextElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$23$2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lodash@4.17.23/node_modules/lodash/debounce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$history$2d$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-history-snapshot.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementShadow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementShadow.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ElementOutline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ElementOutline.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ProsemirrorEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ProsemirrorEditor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-canvas-operations.ts [app-ssr] (ecmascript)");
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
function TextElement({ elementInfo, selectElement }) {
    const handleElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.handleElementId();
    const isScaling = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.isScaling();
    const { updateElement, deleteElement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasOperations"])();
    const { addHistorySnapshot } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$history$2d$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHistorySnapshot"])();
    const { shadowStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementShadow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementShadow"])(elementInfo.shadow);
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [realHeightCache, setRealHeightCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [realWidthCache, setRealWidthCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const handleSelectElement = (e, canMove = true)=>{
        if (elementInfo.lock) return;
        e.stopPropagation();
        selectElement?.(e, elementInfo, canMove);
    };
    // Check if element is being handled
    const isHandleElement = handleElementId === elementInfo.id;
    // Update element height/width when scaling ends
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (handleElementId !== elementInfo.id) return;
        if (!isScaling) {
            if (!elementInfo.vertical && realHeightCache !== -1) {
                updateElement({
                    id: elementInfo.id,
                    props: {
                        height: realHeightCache
                    }
                });
                // eslint-disable-next-line react-hooks/set-state-in-effect -- DOM measurement requires effect
                setRealHeightCache(-1);
            }
            if (elementInfo.vertical && realWidthCache !== -1) {
                updateElement({
                    id: elementInfo.id,
                    props: {
                        width: realWidthCache
                    }
                });
                setRealWidthCache(-1);
            }
        }
    }, [
        isScaling,
        handleElementId,
        elementInfo.id,
        elementInfo.vertical,
        realHeightCache,
        realWidthCache,
        updateElement
    ]);
    // Monitor text element size changes
    const updateTextElementHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((entries)=>{
        const contentRect = entries[0].contentRect;
        if (!elementRef.current) return;
        const realHeight = contentRect.height + 20;
        const realWidth = contentRect.width + 20;
        if (!elementInfo.vertical && elementInfo.height !== realHeight) {
            if (!isScaling) {
                updateElement({
                    id: elementInfo.id,
                    props: {
                        height: realHeight
                    }
                });
            } else {
                setRealHeightCache(realHeight);
            }
        }
        if (elementInfo.vertical && elementInfo.width !== realWidth) {
            if (!isScaling) {
                updateElement({
                    id: elementInfo.id,
                    props: {
                        width: realWidth
                    }
                });
            } else {
                setRealWidthCache(realWidth);
            }
        }
    }, [
        elementInfo.vertical,
        elementInfo.height,
        elementInfo.width,
        elementInfo.id,
        isScaling,
        updateElement
    ]);
    // ResizeObserver setup
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = elementRef.current;
        const resizeObserver = new ResizeObserver(updateTextElementHeight);
        if (el) {
            resizeObserver.observe(el);
        }
        return ()=>{
            if (el) {
                resizeObserver.unobserve(el);
            }
        };
    }, [
        updateTextElementHeight
    ]);
    // Update content
    const updateContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((content, ignore = false)=>{
        updateElement({
            id: elementInfo.id,
            props: {
                content
            }
        });
        if (!ignore) addHistorySnapshot();
    }, [
        elementInfo.id,
        updateElement,
        addHistorySnapshot
    ]);
    // Check and delete empty text
    const checkEmptyText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const debouncedCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lodash$40$4$2e$17$2e$23$2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>{
            const pureText = elementInfo.content.replace(/<[^>]+>/g, '');
            if (!pureText) deleteElement(elementInfo.id);
        }, 300, {
            trailing: true
        });
        debouncedCheck();
    }, [
        elementInfo.content,
        elementInfo.id,
        deleteElement
    ]);
    // Check empty text when element is no longer handled
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isHandleElement) {
            checkEmptyText();
        }
    }, [
        isHandleElement,
        checkEmptyText
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `editable-element-text absolute ${elementInfo.lock ? 'lock' : ''}`,
        style: {
            top: `${elementInfo.top}px`,
            left: `${elementInfo.left}px`,
            width: `${elementInfo.width}px`,
            height: `${elementInfo.height}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rotate-wrapper w-full h-full",
            style: {
                transform: `rotate(${elementInfo.rotate}deg)`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: elementRef,
                className: `element-content relative p-[10px] leading-[1.5] break-words ${elementInfo.lock ? 'cursor-default' : 'cursor-move'}`,
                style: {
                    width: elementInfo.vertical ? 'auto' : `${elementInfo.width}px`,
                    height: elementInfo.vertical ? `${elementInfo.height}px` : 'auto',
                    backgroundColor: elementInfo.fill,
                    opacity: elementInfo.opacity,
                    textShadow: shadowStyle,
                    lineHeight: elementInfo.lineHeight,
                    letterSpacing: `${elementInfo.wordSpace || 0}px`,
                    color: elementInfo.defaultColor,
                    fontFamily: elementInfo.defaultFontName,
                    writingMode: elementInfo.vertical ? 'vertical-rl' : 'horizontal-tb',
                    // @ts-expect-error - CSS custom property
                    '--paragraphSpace': `${elementInfo.paragraphSpace === undefined ? 5 : elementInfo.paragraphSpace}px`
                },
                onMouseDown: (e)=>handleSelectElement(e),
                onTouchStart: (e)=>handleSelectElement(e),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ElementOutline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementOutline"], {
                        width: elementInfo.width,
                        height: elementInfo.height,
                        outline: elementInfo.outline
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/TextElement/index.tsx",
                        lineNumber: 200,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ProsemirrorEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProsemirrorEditor"], {
                            elementId: elementInfo.id,
                            defaultColor: elementInfo.defaultColor,
                            defaultFontName: elementInfo.defaultFontName,
                            editable: !elementInfo.lock,
                            value: elementInfo.content,
                            onUpdate: ({ value, ignore })=>updateContent(value, ignore),
                            onMouseDown: (e)=>handleSelectElement(e, false)
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/components/element/TextElement/index.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/TextElement/index.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "drag-handler top absolute left-0 right-0 h-[10px] top-0"
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/TextElement/index.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "drag-handler bottom absolute left-0 right-0 h-[10px] bottom-0"
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/TextElement/index.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/slide-renderer/components/element/TextElement/index.tsx",
                lineNumber: 180,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/TextElement/index.tsx",
            lineNumber: 176,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/TextElement/index.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/LineElement/index.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LineElement",
    ()=>LineElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/element.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementShadow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementShadow.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LineElement$2f$LinePointMarker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/LineElement/LinePointMarker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LineElement$2f$BaseLineElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/LineElement/BaseLineElement.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function LineElement({ elementInfo, selectElement }) {
    const { shadowStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementShadow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementShadow"])(elementInfo.shadow);
    const handleSelectElement = (e)=>{
        if (elementInfo.lock) return;
        e.stopPropagation();
        selectElement?.(e, elementInfo);
    };
    // Calculate SVG dimensions
    const svgWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const width = Math.abs(elementInfo.start[0] - elementInfo.end[0]);
        return width < 24 ? 24 : width;
    }, [
        elementInfo.start,
        elementInfo.end
    ]);
    const svgHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const height = Math.abs(elementInfo.start[1] - elementInfo.end[1]);
        return height < 24 ? 24 : height;
    }, [
        elementInfo.start,
        elementInfo.end
    ]);
    // Calculate line dash array for dashed/dotted styles
    const lineDashArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const size = elementInfo.width;
        if (elementInfo.style === 'dashed') {
            return size <= 8 ? `${size * 5} ${size * 2.5}` : `${size * 5} ${size * 1.5}`;
        }
        if (elementInfo.style === 'dotted') {
            return size <= 8 ? `${size * 1.8} ${size * 1.6}` : `${size * 1.5} ${size * 1.2}`;
        }
        return '0 0';
    }, [
        elementInfo.width,
        elementInfo.style
    ]);
    // Generate path data
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLineElementPath"])(elementInfo);
    }, [
        elementInfo
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `editable-element-line absolute pointer-events-none ${elementInfo.lock ? 'lock' : ''}`,
        style: {
            top: `${elementInfo.top}px`,
            left: `${elementInfo.left}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "element-content relative w-full h-full",
            style: {
                filter: shadowStyle ? `drop-shadow(${shadowStyle})` : ''
            },
            onMouseDown: handleSelectElement,
            onTouchStart: handleSelectElement,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                overflow: "visible",
                width: svgWidth,
                height: svgHeight,
                className: "transform-origin-[0_0]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            elementInfo.points[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LineElement$2f$LinePointMarker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinePointMarker"], {
                                id: elementInfo.id,
                                position: "start",
                                type: elementInfo.points[0],
                                color: elementInfo.color,
                                baseSize: elementInfo.width
                            }, void 0, false, {
                                fileName: "[project]/components/slide-renderer/components/element/LineElement/index.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this),
                            elementInfo.points[1] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LineElement$2f$LinePointMarker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinePointMarker"], {
                                id: elementInfo.id,
                                position: "end",
                                type: elementInfo.points[1],
                                color: elementInfo.color,
                                baseSize: elementInfo.width
                            }, void 0, false, {
                                fileName: "[project]/components/slide-renderer/components/element/LineElement/index.tsx",
                                lineNumber: 90,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/slide-renderer/components/element/LineElement/index.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        className: `line-point pointer-events-auto ${elementInfo.lock ? 'cursor-default' : 'cursor-move'}`,
                        d: path,
                        stroke: elementInfo.color,
                        strokeWidth: elementInfo.width,
                        strokeDasharray: lineDashArray,
                        fill: "none",
                        markerStart: elementInfo.points[0] ? `url(#${elementInfo.id}-${elementInfo.points[0]}-start)` : '',
                        markerEnd: elementInfo.points[1] ? `url(#${elementInfo.id}-${elementInfo.points[1]}-end)` : ''
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/LineElement/index.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        className: `line-path pointer-events-auto ${elementInfo.lock ? 'cursor-default' : 'cursor-move'}`,
                        d: path,
                        stroke: "transparent",
                        strokeWidth: "20",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/LineElement/index.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/slide-renderer/components/element/LineElement/index.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/LineElement/index.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/LineElement/index.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/ShapeElement/index.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShapeElement",
    ()=>ShapeElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-canvas-operations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$history$2d$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-history-snapshot.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementShadow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementShadow.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementFlip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementFlip.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementFill$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementFill.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementOutline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/hooks/useElementOutline.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ShapeElement$2f$GradientDefs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ShapeElement/GradientDefs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ShapeElement$2f$PatternDefs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ShapeElement/PatternDefs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ProsemirrorEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ProsemirrorEditor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ShapeElement$2f$BaseShapeElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ShapeElement/BaseShapeElement.tsx [app-ssr] (ecmascript)");
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
function ShapeElement({ elementInfo, selectElement }) {
    const handleElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.handleElementId();
    const { updateElement, removeElementProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasOperations"])();
    const { addHistorySnapshot } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$history$2d$snapshot$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useHistorySnapshot"])();
    const { shadowStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementShadow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementShadow"])(elementInfo.shadow);
    const { flipStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementFlip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementFlip"])(elementInfo.flipH, elementInfo.flipV);
    const { fill } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementFill$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementFill"])(elementInfo, 'editable');
    const { outlineWidth, outlineColor, strokeDashArray } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$hooks$2f$useElementOutline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementOutline"])(elementInfo.outline);
    const [editable, setEditable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSelectElement = (e, canMove = true)=>{
        if (elementInfo.lock) return;
        e.stopPropagation();
        selectElement?.(e, elementInfo, canMove);
    };
    // Stop editing when element is no longer active
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (handleElementId !== elementInfo.id && editable) {
            // eslint-disable-next-line react-hooks/set-state-in-effect -- Sync editable state with active element
            setEditable(false);
        }
    }, [
        handleElementId,
        elementInfo.id,
        editable
    ]);
    // Default text configuration
    const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const defaultText = {
            content: '',
            align: 'middle',
            defaultFontName: 'Microsoft Yahei',
            defaultColor: '#000000'
        };
        if (!elementInfo.text) return defaultText;
        return elementInfo.text;
    }, [
        elementInfo.text
    ]);
    // Update text content
    const updateText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((content, ignore = false)=>{
        const _text = {
            ...text,
            content
        };
        updateElement({
            id: elementInfo.id,
            props: {
                text: _text
            }
        });
        if (!ignore) addHistorySnapshot();
    }, [
        elementInfo.id,
        text,
        updateElement,
        addHistorySnapshot
    ]);
    // Check and remove empty text
    const checkEmptyText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!elementInfo.text) return;
        const pureText = elementInfo.text.content.replace(/<[^>]+>/g, '');
        if (!pureText) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any -- 'text' is specific to PPTShapeElement, not in keyof PPTElement union
            removeElementProps({
                id: elementInfo.id,
                propName: 'text'
            });
            addHistorySnapshot();
        }
    }, [
        elementInfo.id,
        elementInfo.text,
        removeElementProps,
        addHistorySnapshot
    ]);
    // Start editing on double click
    const startEdit = ()=>{
        setEditable(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `editable-element-shape absolute pointer-events-none ${elementInfo.lock ? 'lock' : ''}`,
        style: {
            top: `${elementInfo.top}px`,
            left: `${elementInfo.left}px`,
            width: `${elementInfo.width}px`,
            height: `${elementInfo.height}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rotate-wrapper w-full h-full",
            style: {
                transform: `rotate(${elementInfo.rotate}deg)`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `element-content relative w-full h-full ${elementInfo.lock ? '' : 'cursor-move'}`,
                style: {
                    opacity: elementInfo.opacity,
                    filter: shadowStyle ? `drop-shadow(${shadowStyle})` : '',
                    transform: flipStyle,
                    color: text.defaultColor,
                    fontFamily: text.defaultFontName
                },
                onMouseDown: (e)=>handleSelectElement(e),
                onTouchStart: (e)=>handleSelectElement(e),
                onDoubleClick: startEdit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        overflow: "visible",
                        width: elementInfo.width,
                        height: elementInfo.height,
                        className: "transform-origin-[0_0] block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: [
                                    elementInfo.pattern && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ShapeElement$2f$PatternDefs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PatternDefs"], {
                                        id: `editable-pattern-${elementInfo.id}`,
                                        src: elementInfo.pattern
                                    }, void 0, false, {
                                        fileName: "[project]/components/slide-renderer/components/element/ShapeElement/index.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this),
                                    elementInfo.gradient && !elementInfo.pattern && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ShapeElement$2f$GradientDefs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GradientDefs"], {
                                        id: `editable-gradient-${elementInfo.id}`,
                                        type: elementInfo.gradient.type,
                                        colors: elementInfo.gradient.colors,
                                        rotate: elementInfo.gradient.rotate
                                    }, void 0, false, {
                                        fileName: "[project]/components/slide-renderer/components/element/ShapeElement/index.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/slide-renderer/components/element/ShapeElement/index.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                transform: `scale(${elementInfo.width / elementInfo.viewBox[0]}, ${elementInfo.height / elementInfo.viewBox[1]}) translate(0,0) matrix(1,0,0,1,0,0)`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    className: "shape-path pointer-events-auto",
                                    vectorEffect: "non-scaling-stroke",
                                    strokeLinecap: "butt",
                                    strokeMiterlimit: "8",
                                    d: elementInfo.path,
                                    fill: fill,
                                    stroke: outlineColor,
                                    strokeWidth: outlineWidth,
                                    strokeDasharray: strokeDashArray
                                }, void 0, false, {
                                    fileName: "[project]/components/slide-renderer/components/element/ShapeElement/index.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/slide-renderer/components/element/ShapeElement/index.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/slide-renderer/components/element/ShapeElement/index.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `shape-text absolute inset-0 flex flex-col p-[10px] leading-[1.5] break-words pointer-events-none ${editable || text.content ? 'pointer-events-auto' : ''} ${text.align === 'top' ? 'justify-start' : text.align === 'bottom' ? 'justify-end' : 'justify-center'}`,
                        style: {
                            lineHeight: text.lineHeight,
                            letterSpacing: `${text.wordSpace || 0}px`,
                            // @ts-expect-error - CSS custom property
                            '--paragraphSpace': `${text.paragraphSpace === undefined ? 5 : text.paragraphSpace}px`
                        },
                        children: (editable || text.content) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ProsemirrorEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProsemirrorEditor"], {
                            elementId: elementInfo.id,
                            defaultColor: text.defaultColor,
                            defaultFontName: text.defaultFontName,
                            editable: !elementInfo.lock && editable,
                            value: text.content,
                            onUpdate: ({ value, ignore })=>updateText(value, ignore),
                            onBlur: checkEmptyText,
                            onMouseDown: (e)=>handleSelectElement(e, false)
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/components/element/ShapeElement/index.tsx",
                            lineNumber: 183,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/ShapeElement/index.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/slide-renderer/components/element/ShapeElement/index.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/ShapeElement/index.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/ShapeElement/index.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/ChartElement/index.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChartElement",
    ()=>ChartElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ElementOutline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ElementOutline.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ChartElement$2f$Chart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ChartElement/Chart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ChartElement$2f$BaseChartElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ChartElement/BaseChartElement.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ChartElement({ elementInfo, selectElement }) {
    const handleSelectElement = (e)=>{
        if (elementInfo.lock) return;
        e.stopPropagation();
        selectElement?.(e, elementInfo);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `editable-element-chart absolute ${elementInfo.lock ? 'lock' : ''}`,
        style: {
            top: `${elementInfo.top}px`,
            left: `${elementInfo.left}px`,
            width: `${elementInfo.width}px`,
            height: `${elementInfo.height}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rotate-wrapper w-full h-full",
            style: {
                transform: `rotate(${elementInfo.rotate}deg)`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `element-content relative w-full h-full overflow-hidden ${elementInfo.lock ? 'cursor-default' : 'cursor-move'}`,
                style: {
                    backgroundColor: elementInfo.fill
                },
                onMouseDown: handleSelectElement,
                onTouchStart: handleSelectElement,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ElementOutline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementOutline"], {
                        width: elementInfo.width,
                        height: elementInfo.height,
                        outline: elementInfo.outline
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/ChartElement/index.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ChartElement$2f$Chart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chart"], {
                        width: elementInfo.width,
                        height: elementInfo.height,
                        type: elementInfo.chartType,
                        data: elementInfo.data,
                        themeColors: elementInfo.themeColors,
                        textColor: elementInfo.textColor,
                        lineColor: elementInfo.lineColor,
                        options: elementInfo.options
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/ChartElement/index.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/slide-renderer/components/element/ChartElement/index.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/ChartElement/index.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/ChartElement/index.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/LatexElement/index.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LatexElement",
    ()=>LatexElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LatexElement$2f$BaseLatexElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/LatexElement/BaseLatexElement.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function LatexElement({ elementInfo, selectElement }) {
    const handleSelectElement = (e)=>{
        if (elementInfo.lock) return;
        e.stopPropagation();
        selectElement?.(e, elementInfo);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `editable-element-latex absolute ${elementInfo.lock ? 'lock' : ''}`,
        style: {
            top: `${elementInfo.top}px`,
            left: `${elementInfo.left}px`,
            width: `${elementInfo.width}px`,
            height: `${elementInfo.height}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rotate-wrapper w-full h-full",
            style: {
                transform: `rotate(${elementInfo.rotate}deg)`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `element-content relative w-full h-full ${elementInfo.lock ? 'cursor-default' : 'cursor-move'}`,
                onMouseDown: handleSelectElement,
                onTouchStart: handleSelectElement,
                children: elementInfo.html ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(KatexContent, {
                    html: elementInfo.html,
                    width: elementInfo.width,
                    height: elementInfo.height
                }, void 0, false, {
                    fileName: "[project]/components/slide-renderer/components/element/LatexElement/index.tsx",
                    lineNumber: 46,
                    columnNumber: 13
                }, this) : elementInfo.path && elementInfo.viewBox ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    overflow: "visible",
                    width: elementInfo.width,
                    height: elementInfo.height,
                    stroke: elementInfo.color,
                    strokeWidth: elementInfo.strokeWidth,
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "transform-origin-[0_0]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: `scale(${elementInfo.width / elementInfo.viewBox[0]}, ${elementInfo.height / elementInfo.viewBox[1]}) translate(0,0) matrix(1,0,0,1,0,0)`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: elementInfo.path
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/components/element/LatexElement/index.tsx",
                            lineNumber: 68,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/LatexElement/index.tsx",
                        lineNumber: 63,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/slide-renderer/components/element/LatexElement/index.tsx",
                    lineNumber: 52,
                    columnNumber: 13
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/components/element/LatexElement/index.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/LatexElement/index.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/LatexElement/index.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function KatexContent({ html, width, height }) {
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!innerRef.current) return;
        const naturalW = innerRef.current.scrollWidth;
        const naturalH = innerRef.current.scrollHeight;
        if (naturalW > 0 && naturalH > 0) {
            setScale(Math.min(width / naturalW, height / naturalH));
        }
    }, [
        html,
        width,
        height
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width,
            height,
            overflow: 'hidden'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: innerRef,
            className: "[&_.katex-display]:!m-0",
            style: {
                transformOrigin: '0 0',
                transform: `scale(${scale})`,
                whiteSpace: 'nowrap'
            },
            dangerouslySetInnerHTML: {
                __html: html
            }
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/LatexElement/index.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/LatexElement/index.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/TableElement/index.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableElement",
    ()=>TableElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TableElement$2f$StaticTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/TableElement/StaticTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TableElement$2f$BaseTableElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/TableElement/BaseTableElement.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function TableElement({ elementInfo, selectElement }) {
    const handleSelectElement = (e)=>{
        if (elementInfo.lock) return;
        e.stopPropagation();
        selectElement?.(e, elementInfo);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `editable-element-table absolute ${elementInfo.lock ? 'lock' : ''}`,
        style: {
            top: `${elementInfo.top}px`,
            left: `${elementInfo.left}px`,
            width: `${elementInfo.width}px`,
            height: `${elementInfo.height}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rotate-wrapper w-full h-full",
            style: {
                transform: `rotate(${elementInfo.rotate}deg)`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `element-content relative w-full h-full overflow-hidden ${elementInfo.lock ? 'cursor-default' : 'cursor-move'}`,
                onMouseDown: handleSelectElement,
                onTouchStart: handleSelectElement,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TableElement$2f$StaticTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StaticTable"], {
                    elementInfo: elementInfo
                }, void 0, false, {
                    fileName: "[project]/components/slide-renderer/components/element/TableElement/index.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/components/element/TableElement/index.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/TableElement/index.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/TableElement/index.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/components/element/VideoElement/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoElement",
    ()=>VideoElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/media-generation.ts [app-ssr] (ecmascript)");
'use client';
;
;
function VideoElement({ elementInfo, selectElement }) {
    const handleSelectElement = (e)=>{
        if (elementInfo.lock) return;
        e.stopPropagation();
        selectElement?.(e, elementInfo);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `editable-element-video absolute ${elementInfo.lock ? 'lock' : ''}`,
        style: {
            top: `${elementInfo.top}px`,
            left: `${elementInfo.left}px`,
            width: `${elementInfo.width}px`,
            height: `${elementInfo.height}px`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rotate-wrapper w-full h-full",
            style: {
                transform: `rotate(${elementInfo.rotate}deg)`
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `element-content w-full h-full relative ${elementInfo.lock ? '' : 'cursor-move'}`,
                onMouseDown: handleSelectElement,
                onTouchStart: handleSelectElement,
                children: [
                    elementInfo.poster ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "w-full h-full",
                        style: {
                            objectFit: 'contain'
                        },
                        src: elementInfo.poster,
                        alt: "",
                        draggable: false,
                        onDragStart: (e)=>e.preventDefault()
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/VideoElement/index.tsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, this) : elementInfo.src && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$media$2d$generation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMediaPlaceholder"])(elementInfo.src) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        className: "w-full h-full",
                        style: {
                            objectFit: 'contain',
                            pointerEvents: 'none'
                        },
                        src: elementInfo.src,
                        preload: "metadata"
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/VideoElement/index.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full bg-black/10 rounded"
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/VideoElement/index.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-full bg-black/50 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 text-white ml-0.5",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    points: "5 3 19 12 5 21 5 3"
                                }, void 0, false, {
                                    fileName: "[project]/components/slide-renderer/components/element/VideoElement/index.tsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/slide-renderer/components/element/VideoElement/index.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/components/element/VideoElement/index.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/components/element/VideoElement/index.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/slide-renderer/components/element/VideoElement/index.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/components/element/VideoElement/index.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/components/element/VideoElement/index.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditableElement",
    ()=>EditableElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/slides.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ImageElement/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TextElement$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/TextElement/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LineElement$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/LineElement/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ShapeElement$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ShapeElement/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ChartElement$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ChartElement/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LatexElement$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/LatexElement/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TableElement$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/TableElement/index.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$VideoElement$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/VideoElement/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/context-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/edit.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-canvas-operations.ts [app-ssr] (ecmascript)");
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
function EditableElement({ elementInfo, elementIndex, isMultiSelect, selectElement, openLinkDialog }) {
    const CurrentElementComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- element components have varying prop signatures
        const elementTypeMap = {
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].IMAGE]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].TEXT]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TextElement$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].SHAPE]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ShapeElement$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ShapeElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].LINE]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LineElement$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].CHART]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ChartElement$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ChartElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].LATEX]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LatexElement$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LatexElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].TABLE]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TableElement$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TableElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].VIDEO]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$VideoElement$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoElement"]
        };
        return elementTypeMap[elementInfo.type] || null;
    }, [
        elementInfo.type
    ]);
    const { copyElement, pasteElement, cutElement, deleteElement, lockElement, unlockElement, selectAllElements, alignElementToCanvas, orderElement, combineElements, uncombineElements } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasOperations"])();
    const contextmenus = ()=>{
        if (elementInfo.lock) {
            return [
                {
                    text: '解锁',
                    handler: ()=>unlockElement(elementInfo)
                }
            ];
        }
        return [
            {
                text: '剪切',
                subText: 'Ctrl + X',
                handler: cutElement
            },
            {
                text: '复制',
                subText: 'Ctrl + C',
                handler: copyElement
            },
            {
                text: '粘贴',
                subText: 'Ctrl + V',
                handler: pasteElement
            },
            {
                divider: true
            },
            {
                text: '水平居中',
                handler: ()=>alignElementToCanvas(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementAlignCommands"].HORIZONTAL),
                children: [
                    {
                        text: '水平垂直居中',
                        handler: ()=>alignElementToCanvas(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementAlignCommands"].CENTER)
                    },
                    {
                        text: '水平居中',
                        handler: ()=>alignElementToCanvas(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementAlignCommands"].HORIZONTAL)
                    },
                    {
                        text: '左对齐',
                        handler: ()=>alignElementToCanvas(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementAlignCommands"].LEFT)
                    },
                    {
                        text: '右对齐',
                        handler: ()=>alignElementToCanvas(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementAlignCommands"].RIGHT)
                    }
                ]
            },
            {
                text: '垂直居中',
                handler: ()=>alignElementToCanvas(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementAlignCommands"].VERTICAL),
                children: [
                    {
                        text: '水平垂直居中',
                        handler: ()=>alignElementToCanvas(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementAlignCommands"].CENTER)
                    },
                    {
                        text: '垂直居中',
                        handler: ()=>alignElementToCanvas(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementAlignCommands"].VERTICAL)
                    },
                    {
                        text: '顶部对齐',
                        handler: ()=>alignElementToCanvas(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementAlignCommands"].TOP)
                    },
                    {
                        text: '底部对齐',
                        handler: ()=>alignElementToCanvas(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementAlignCommands"].BOTTOM)
                    }
                ]
            },
            {
                divider: true
            },
            {
                text: '置于顶层',
                disable: isMultiSelect && !elementInfo.groupId,
                handler: ()=>orderElement(elementInfo, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementOrderCommands"].TOP),
                children: [
                    {
                        text: '置于顶层',
                        handler: ()=>orderElement(elementInfo, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementOrderCommands"].TOP)
                    },
                    {
                        text: '上移一层',
                        handler: ()=>orderElement(elementInfo, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementOrderCommands"].UP)
                    }
                ]
            },
            {
                text: '置于底层',
                disable: isMultiSelect && !elementInfo.groupId,
                handler: ()=>orderElement(elementInfo, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementOrderCommands"].BOTTOM),
                children: [
                    {
                        text: '置于底层',
                        handler: ()=>orderElement(elementInfo, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementOrderCommands"].BOTTOM)
                    },
                    {
                        text: '下移一层',
                        handler: ()=>orderElement(elementInfo, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementOrderCommands"].DOWN)
                    }
                ]
            },
            {
                divider: true
            },
            {
                text: '设置链接',
                handler: openLinkDialog,
                disable: true
            },
            {
                text: elementInfo.groupId ? '取消组合' : '组合',
                subText: 'Ctrl + G',
                handler: elementInfo.groupId ? uncombineElements : combineElements,
                hide: !isMultiSelect
            },
            {
                text: '全选',
                subText: 'Ctrl + A',
                handler: selectAllElements
            },
            {
                text: '锁定',
                subText: 'Ctrl + L',
                handler: lockElement
            },
            {
                text: '删除',
                subText: 'Delete',
                handler: deleteElement
            }
        ];
    };
    if (!CurrentElementComponent) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: `editable-element-${elementInfo.id}`,
            className: "editable-element absolute",
            style: {
                zIndex: elementIndex,
                left: elementInfo.left + 'px',
                top: elementInfo.top + 'px',
                width: elementInfo.width + 'px'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 bg-gray-100 border border-gray-300 text-xs text-gray-500",
                children: [
                    elementInfo.type,
                    " element (not implemented)"
                ]
            }, void 0, true, {
                fileName: "[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx",
                lineNumber: 229,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx",
            lineNumber: 219,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: `editable-element-${elementInfo.id}`,
        className: "editable-element absolute",
        style: {
            zIndex: elementIndex
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenu"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuTrigger"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrentElementComponent, {
                        elementInfo: elementInfo,
                        selectElement: selectElement
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuContent"], {
                    children: contextmenus().map((item, index)=>{
                        if (item.divider) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuSeparator"], {}, index, false, {
                                fileName: "[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx",
                                lineNumber: 251,
                                columnNumber: 22
                            }, this);
                        }
                        // If has children, use submenu component
                        if (item.children && item.children.length > 0) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuSub"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuSubTrigger"], {
                                        disabled: item.disable,
                                        hidden: item.hide,
                                        children: [
                                            item.text,
                                            item.subText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuShortcut"], {
                                                children: item.subText
                                            }, void 0, false, {
                                                fileName: "[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx",
                                                lineNumber: 260,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx",
                                        lineNumber: 258,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuSubContent"], {
                                        children: item.children.map((child, childIndex)=>child.divider ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuSeparator"], {}, childIndex, false, {
                                                fileName: "[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx",
                                                lineNumber: 265,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuItem"], {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    child.handler?.();
                                                },
                                                disabled: child.disable,
                                                hidden: child.hide,
                                                children: [
                                                    child.text,
                                                    child.subText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuShortcut"], {
                                                        children: child.subText
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, childIndex, true, {
                                                fileName: "[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx",
                                                lineNumber: 267,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx",
                                        lineNumber: 262,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx",
                                lineNumber: 257,
                                columnNumber: 17
                            }, this);
                        }
                        // Regular menu item
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuItem"], {
                            onClick: (e)=>{
                                e.stopPropagation();
                                item.handler?.();
                            },
                            disabled: item.disable,
                            hidden: item.hide,
                            children: [
                                item.text,
                                item.subText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuShortcut"], {
                                    children: item.subText
                                }, void 0, false, {
                                    fileName: "[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx",
                                    lineNumber: 300,
                                    columnNumber: 34
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx",
                            lineNumber: 290,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx",
            lineNumber: 244,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx",
        lineNumber: 237,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/hooks/useCommonOperate.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCommonOperate",
    ()=>useCommonOperate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/edit.ts [app-ssr] (ecmascript)");
;
;
function useCommonOperate(width, height) {
    // Element resize handlers
    const resizeHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return [
            {
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_TOP,
                style: {}
            },
            {
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].TOP,
                style: {
                    left: width / 2 + 'px'
                }
            },
            {
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_TOP,
                style: {
                    left: width + 'px'
                }
            },
            {
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT,
                style: {
                    top: height / 2 + 'px'
                }
            },
            {
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT,
                style: {
                    left: width + 'px',
                    top: height / 2 + 'px'
                }
            },
            {
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT_BOTTOM,
                style: {
                    top: height + 'px'
                }
            },
            {
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].BOTTOM,
                style: {
                    left: width / 2 + 'px',
                    top: height + 'px'
                }
            },
            {
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT_BOTTOM,
                style: {
                    left: width + 'px',
                    top: height + 'px'
                }
            }
        ];
    }, [
        width,
        height
    ]);
    // Text element resize handlers
    const textElementResizeHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return [
            {
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].LEFT,
                style: {
                    top: height / 2 + 'px'
                }
            },
            {
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].RIGHT,
                style: {
                    left: width + 'px',
                    top: height / 2 + 'px'
                }
            }
        ];
    }, [
        width,
        height
    ]);
    const verticalTextElementResizeHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return [
            {
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].TOP,
                style: {
                    left: width / 2 + 'px'
                }
            },
            {
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateResizeHandlers"].BOTTOM,
                style: {
                    left: width / 2 + 'px',
                    top: height + 'px'
                }
            }
        ];
    }, [
        width,
        height
    ]);
    // Element selection border lines
    const borderLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return [
            {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateBorderLines"].T,
                style: {
                    width: width + 'px'
                }
            },
            {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateBorderLines"].B,
                style: {
                    top: height + 'px',
                    width: width + 'px'
                }
            },
            {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateBorderLines"].L,
                style: {
                    height: height + 'px'
                }
            },
            {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateBorderLines"].R,
                style: {
                    left: width + 'px',
                    height: height + 'px'
                }
            }
        ];
    }, [
        width,
        height
    ]);
    return {
        resizeHandlers,
        textElementResizeHandlers,
        verticalTextElementResizeHandlers,
        borderLines
    };
}
}),
"[project]/components/slide-renderer/Editor/Canvas/Operate/RotateHandler.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RotateHandler",
    ()=>RotateHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function RotateHandler({ style, className, onMouseDown }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rotate-handler absolute w-[10px] h-[10px] -top-[25px] -ml-[5px] border border-primary bg-white rounded-[1px] cursor-grab active:cursor-grabbing ${className || ''}`,
        style: style,
        onMouseDown: onMouseDown
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/RotateHandler.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/Operate/ResizeHandler.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizeHandler",
    ()=>ResizeHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function ResizeHandler({ type, rotate = 0, style, className, onMouseDown }) {
    const rotateClassName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const prefix = 'rotate-';
        if (rotate > -22.5 && rotate <= 22.5) return prefix + '0';
        else if (rotate > 22.5 && rotate <= 67.5) return prefix + '45';
        else if (rotate > 67.5 && rotate <= 112.5) return prefix + '90';
        else if (rotate > 112.5 && rotate <= 157.5) return prefix + '135';
        else if (rotate > 157.5 || rotate <= -157.5) return prefix + '0';
        else if (rotate > -157.5 && rotate <= -112.5) return prefix + '45';
        else if (rotate > -112.5 && rotate <= -67.5) return prefix + '90';
        else if (rotate > -67.5 && rotate <= -22.5) return prefix + '135';
        return prefix + '0';
    }, [
        rotate
    ]);
    // Map rotation and handler type to cursor style
    const cursorClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const key = `${type}.${rotateClassName}`;
        const cursorMap = {
            // nwse-resize (northwest-southeast)
            'left-top.rotate-0': 'cursor-nwse-resize',
            'right-bottom.rotate-0': 'cursor-nwse-resize',
            'left.rotate-45': 'cursor-nwse-resize',
            'right.rotate-45': 'cursor-nwse-resize',
            'left-bottom.rotate-90': 'cursor-nwse-resize',
            'right-top.rotate-90': 'cursor-nwse-resize',
            'top.rotate-135': 'cursor-nwse-resize',
            'bottom.rotate-135': 'cursor-nwse-resize',
            // ns-resize (north-south)
            'top.rotate-0': 'cursor-ns-resize',
            'bottom.rotate-0': 'cursor-ns-resize',
            'left-top.rotate-45': 'cursor-ns-resize',
            'right-bottom.rotate-45': 'cursor-ns-resize',
            'left.rotate-90': 'cursor-ns-resize',
            'right.rotate-90': 'cursor-ns-resize',
            'left-bottom.rotate-135': 'cursor-ns-resize',
            'right-top.rotate-135': 'cursor-ns-resize',
            // nesw-resize (northeast-southwest)
            'left-bottom.rotate-0': 'cursor-nesw-resize',
            'right-top.rotate-0': 'cursor-nesw-resize',
            'top.rotate-45': 'cursor-nesw-resize',
            'bottom.rotate-45': 'cursor-nesw-resize',
            'left-top.rotate-90': 'cursor-nesw-resize',
            'right-bottom.rotate-90': 'cursor-nesw-resize',
            'left.rotate-135': 'cursor-nesw-resize',
            'right.rotate-135': 'cursor-nesw-resize',
            // ew-resize (east-west)
            'left.rotate-0': 'cursor-ew-resize',
            'right.rotate-0': 'cursor-ew-resize',
            'left-bottom.rotate-45': 'cursor-ew-resize',
            'right-top.rotate-45': 'cursor-ew-resize',
            'top.rotate-90': 'cursor-ew-resize',
            'bottom.rotate-90': 'cursor-ew-resize',
            'left-top.rotate-135': 'cursor-ew-resize',
            'right-bottom.rotate-135': 'cursor-ew-resize'
        };
        return cursorMap[key] || 'cursor-pointer';
    }, [
        type,
        rotateClassName
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `resize-handler absolute w-[10px] h-[10px] left-0 top-0 m-[-5px_0_0_-5px] border border-primary bg-white rounded-[1px] ${cursorClass} ${className || ''}`,
        style: style,
        onMouseDown: onMouseDown
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/ResizeHandler.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/Operate/BorderLine.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BorderLine",
    ()=>BorderLine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function BorderLine({ type, isWide = false, style, className }) {
    const borderClass = {
        top: 'border-t',
        bottom: 'border-b',
        left: 'border-l',
        right: 'border-r'
    }[type];
    const wideBeforeClass = isWide ? ({
        top: 'before:absolute before:-top-2 before:-left-2 before:w-[calc(100%+16px)] before:h-4 before:bg-transparent before:cursor-move before:content-[""]',
        bottom: 'before:absolute before:-bottom-2 before:-left-2 before:w-[calc(100%+16px)] before:h-4 before:bg-transparent before:cursor-move before:content-[""]',
        left: 'before:absolute before:-top-2 before:-left-2 before:w-4 before:h-[calc(100%+16px)] before:bg-transparent before:cursor-move before:content-[""]',
        right: 'before:absolute before:-top-2 before:-right-2 before:w-4 before:h-[calc(100%+16px)] before:bg-transparent before:cursor-move before:content-[""]'
    })[type] : '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `border-line absolute inset-0 border-dashed border-primary ${borderClass} ${wideBeforeClass} ${className || ''}`,
        style: style
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/BorderLine.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/Operate/ImageElementOperate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageElementOperate",
    ()=>ImageElementOperate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useCommonOperate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/hooks/useCommonOperate.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$RotateHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/RotateHandler.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$ResizeHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/ResizeHandler.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$BorderLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/BorderLine.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function ImageElementOperate({ elementInfo, handlerVisible, rotateElement, scaleElement }) {
    const canvasScale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasScale();
    const clipingImageElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.clipingImageElementId();
    const isCliping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>clipingImageElementId === elementInfo.id, [
        clipingImageElementId,
        elementInfo.id
    ]);
    const scaleWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>elementInfo.width * canvasScale, [
        elementInfo.width,
        canvasScale
    ]);
    const scaleHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>elementInfo.height * canvasScale, [
        elementInfo.height,
        canvasScale
    ]);
    const { resizeHandlers, borderLines } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useCommonOperate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCommonOperate"])(scaleWidth, scaleHeight);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `image-element-operate ${isCliping ? 'invisible' : ''}`,
        children: [
            borderLines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$BorderLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BorderLine"], {
                    type: line.type,
                    style: line.style,
                    className: "operate-border-line"
                }, line.type, false, {
                    fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/ImageElementOperate.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)),
            handlerVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    resizeHandlers.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$ResizeHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizeHandler"], {
                            type: point.direction,
                            rotate: elementInfo.rotate,
                            style: point.style,
                            className: "operate-resize-handler",
                            onMouseDown: (e)=>{
                                e.stopPropagation();
                                scaleElement(e, elementInfo, point.direction);
                            }
                        }, point.direction, false, {
                            fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/ImageElementOperate.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$RotateHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RotateHandler"], {
                        className: "operate-rotate-handler",
                        style: {
                            left: scaleWidth / 2 + 'px'
                        },
                        onMouseDown: (e)=>{
                            e.stopPropagation();
                            rotateElement(e, elementInfo);
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/ImageElementOperate.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/ImageElementOperate.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/Operate/TextElementOperate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextElementOperate",
    ()=>TextElementOperate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useCommonOperate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/hooks/useCommonOperate.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$RotateHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/RotateHandler.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$ResizeHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/ResizeHandler.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$BorderLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/BorderLine.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function TextElementOperate({ elementInfo, handlerVisible, rotateElement, scaleElement }) {
    const canvasScale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasScale();
    const scaleWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>elementInfo.width * canvasScale, [
        elementInfo.width,
        canvasScale
    ]);
    const scaleHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>elementInfo.height * canvasScale, [
        elementInfo.height,
        canvasScale
    ]);
    const { textElementResizeHandlers, verticalTextElementResizeHandlers, borderLines } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useCommonOperate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCommonOperate"])(scaleWidth, scaleHeight);
    const resizeHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>elementInfo.vertical ? verticalTextElementResizeHandlers : textElementResizeHandlers, [
        elementInfo.vertical,
        textElementResizeHandlers,
        verticalTextElementResizeHandlers
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-element-operate",
        children: [
            borderLines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$BorderLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BorderLine"], {
                    type: line.type,
                    style: line.style,
                    className: "operate-border-line"
                }, line.type, false, {
                    fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/TextElementOperate.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)),
            handlerVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    resizeHandlers.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$ResizeHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizeHandler"], {
                            type: point.direction,
                            rotate: elementInfo.rotate,
                            style: point.style,
                            className: "operate-resize-handler",
                            onMouseDown: (e)=>{
                                e.stopPropagation();
                                scaleElement(e, elementInfo, point.direction);
                            }
                        }, point.direction, false, {
                            fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/TextElementOperate.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$RotateHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RotateHandler"], {
                        className: "operate-rotate-handler",
                        style: {
                            left: scaleWidth / 2 + 'px'
                        },
                        onMouseDown: (e)=>{
                            e.stopPropagation();
                            rotateElement(e, elementInfo);
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/TextElementOperate.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/TextElementOperate.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/Operate/ShapeElementOperate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShapeElementOperate",
    ()=>ShapeElementOperate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$shapes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/configs/shapes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useCommonOperate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/hooks/useCommonOperate.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$RotateHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/RotateHandler.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$ResizeHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/ResizeHandler.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$BorderLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/BorderLine.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function ShapeElementOperate({ elementInfo, handlerVisible, rotateElement, scaleElement, moveShapeKeypoint }) {
    const canvasScale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasScale();
    const scaleWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>elementInfo.width * canvasScale, [
        elementInfo.width,
        canvasScale
    ]);
    const scaleHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>elementInfo.height * canvasScale, [
        elementInfo.height,
        canvasScale
    ]);
    const { resizeHandlers, borderLines } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useCommonOperate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCommonOperate"])(scaleWidth, scaleHeight);
    const keypoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!elementInfo.pathFormula || elementInfo.keypoints === undefined) return [];
        const pathFormula = __TURBOPACK__imported__module__$5b$project$5d2f$configs$2f$shapes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHAPE_PATH_FORMULAS"][elementInfo.pathFormula];
        return elementInfo.keypoints.map((keypoint, index)=>{
            const getBaseSize = pathFormula.getBaseSize[index];
            const relative = pathFormula.relative[index];
            const keypointPos = getBaseSize(elementInfo.width, elementInfo.height) * keypoint;
            let styles = {};
            if (relative === 'left') styles = {
                left: keypointPos * canvasScale + 'px'
            };
            else if (relative === 'right') styles = {
                left: (elementInfo.width - keypointPos) * canvasScale + 'px'
            };
            else if (relative === 'center') styles = {
                left: (elementInfo.width - keypointPos) / 2 * canvasScale + 'px'
            };
            else if (relative === 'top') styles = {
                top: keypointPos * canvasScale + 'px'
            };
            else if (relative === 'bottom') styles = {
                top: (elementInfo.height - keypointPos) * canvasScale + 'px'
            };
            else if (relative === 'left_bottom') styles = {
                left: keypointPos * canvasScale + 'px',
                top: elementInfo.height * canvasScale + 'px'
            };
            else if (relative === 'right_bottom') styles = {
                left: (elementInfo.width - keypointPos) * canvasScale + 'px',
                top: elementInfo.height * canvasScale + 'px'
            };
            else if (relative === 'top_right') styles = {
                left: elementInfo.width * canvasScale + 'px',
                top: keypointPos * canvasScale + 'px'
            };
            else if (relative === 'bottom_right') styles = {
                left: elementInfo.width * canvasScale + 'px',
                top: (elementInfo.height - keypointPos) * canvasScale + 'px'
            };
            return {
                keypoint,
                styles
            };
        });
    }, [
        elementInfo,
        canvasScale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "shape-element-operate",
        children: [
            borderLines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$BorderLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BorderLine"], {
                    type: line.type,
                    style: line.style,
                    className: "operate-border-line"
                }, line.type, false, {
                    fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/ShapeElementOperate.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)),
            handlerVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    resizeHandlers.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$ResizeHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizeHandler"], {
                            type: point.direction,
                            rotate: elementInfo.rotate,
                            style: point.style,
                            className: "operate-resize-handler",
                            onMouseDown: (e)=>{
                                e.stopPropagation();
                                scaleElement(e, elementInfo, point.direction);
                            }
                        }, point.direction, false, {
                            fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/ShapeElementOperate.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$RotateHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RotateHandler"], {
                        className: "operate-rotate-handler",
                        style: {
                            left: scaleWidth / 2 + 'px'
                        },
                        onMouseDown: (e)=>{
                            e.stopPropagation();
                            rotateElement(e, elementInfo);
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/ShapeElementOperate.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    keypoints.map((keypoint, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "operate-keypoint-handler absolute w-[10px] h-[10px] left-0 top-0 m-[-5px_0_0_-5px] border border-primary bg-[#ffe873] rounded-[1px]",
                            style: keypoint.styles,
                            onMouseDown: (e)=>{
                                e.stopPropagation();
                                moveShapeKeypoint(e, elementInfo, index);
                            }
                        }, index, false, {
                            fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/ShapeElementOperate.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/ShapeElementOperate.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/Operate/LineElementOperate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LineElementOperate",
    ()=>LineElementOperate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/edit.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$ResizeHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/ResizeHandler.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
function LineElementOperate({ elementInfo, handlerVisible, dragLineElement }) {
    const canvasScale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasScale();
    const svgWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Math.max(elementInfo.start[0], elementInfo.end[0]), [
        elementInfo.start,
        elementInfo.end
    ]);
    const svgHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Math.max(elementInfo.start[1], elementInfo.end[1]), [
        elementInfo.start,
        elementInfo.end
    ]);
    const resizeHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const handlers = [
            {
                handler: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateLineHandlers"].START,
                style: {
                    left: elementInfo.start[0] * canvasScale + 'px',
                    top: elementInfo.start[1] * canvasScale + 'px'
                }
            },
            {
                handler: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateLineHandlers"].END,
                style: {
                    left: elementInfo.end[0] * canvasScale + 'px',
                    top: elementInfo.end[1] * canvasScale + 'px'
                }
            }
        ];
        if (elementInfo.curve || elementInfo.broken || elementInfo.broken2) {
            const ctrlHandler = elementInfo.curve || elementInfo.broken || elementInfo.broken2;
            handlers.push({
                handler: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateLineHandlers"].C,
                style: {
                    left: ctrlHandler[0] * canvasScale + 'px',
                    top: ctrlHandler[1] * canvasScale + 'px'
                }
            });
        } else if (elementInfo.cubic) {
            const [ctrlHandler1, ctrlHandler2] = elementInfo.cubic;
            handlers.push({
                handler: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateLineHandlers"].C1,
                style: {
                    left: ctrlHandler1[0] * canvasScale + 'px',
                    top: ctrlHandler1[1] * canvasScale + 'px'
                }
            });
            handlers.push({
                handler: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$edit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OperateLineHandlers"].C2,
                style: {
                    left: ctrlHandler2[0] * canvasScale + 'px',
                    top: ctrlHandler2[1] * canvasScale + 'px'
                }
            });
        }
        return handlers;
    }, [
        elementInfo,
        canvasScale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "line-element-operate",
        children: handlerVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                resizeHandlers.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$ResizeHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizeHandler"], {
                        style: point.style,
                        className: "operate-resize-handler",
                        onMouseDown: (e)=>{
                            e.stopPropagation();
                            dragLineElement(e, elementInfo, point.handler);
                        }
                    }, point.handler, false, {
                        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/LineElementOperate.tsx",
                        lineNumber: 90,
                        columnNumber: 13
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: svgWidth || 1,
                    height: svgHeight || 1,
                    stroke: elementInfo.color,
                    className: "absolute left-0 top-0 pointer-events-none origin-top-left",
                    style: {
                        transform: `scale(${canvasScale})`,
                        overflow: 'visible'
                    },
                    children: [
                        elementInfo.curve && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    className: "anchor-line stroke-1 stroke-dasharray-[5_5] opacity-50",
                                    x1: elementInfo.start[0],
                                    y1: elementInfo.start[1],
                                    x2: elementInfo.curve[0],
                                    y2: elementInfo.curve[1]
                                }, void 0, false, {
                                    fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/LineElementOperate.tsx",
                                    lineNumber: 110,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    className: "anchor-line stroke-1 stroke-dasharray-[5_5] opacity-50",
                                    x1: elementInfo.end[0],
                                    y1: elementInfo.end[1],
                                    x2: elementInfo.curve[0],
                                    y2: elementInfo.curve[1]
                                }, void 0, false, {
                                    fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/LineElementOperate.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/LineElementOperate.tsx",
                            lineNumber: 109,
                            columnNumber: 15
                        }, this),
                        elementInfo.cubic?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        className: "anchor-line stroke-1 stroke-dasharray-[5_5] opacity-50",
                                        x1: elementInfo.start[0],
                                        y1: elementInfo.start[1],
                                        x2: item[0],
                                        y2: item[1]
                                    }, void 0, false, {
                                        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/LineElementOperate.tsx",
                                        lineNumber: 129,
                                        columnNumber: 19
                                    }, this),
                                    index === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        className: "anchor-line stroke-1 stroke-dasharray-[5_5] opacity-50",
                                        x1: elementInfo.end[0],
                                        y1: elementInfo.end[1],
                                        x2: item[0],
                                        y2: item[1]
                                    }, void 0, false, {
                                        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/LineElementOperate.tsx",
                                        lineNumber: 138,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/LineElementOperate.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/LineElementOperate.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/LineElementOperate.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/Operate/TableElementOperate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableElementOperate",
    ()=>TableElementOperate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useCommonOperate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/hooks/useCommonOperate.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$RotateHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/RotateHandler.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$ResizeHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/ResizeHandler.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$BorderLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/BorderLine.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function TableElementOperate({ elementInfo, handlerVisible, rotateElement, scaleElement }) {
    const canvasScale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasScale();
    const outlineWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>elementInfo.outline.width || 1, [
        elementInfo.outline.width
    ]);
    const scaleWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(elementInfo.width + outlineWidth) * canvasScale, [
        elementInfo.width,
        outlineWidth,
        canvasScale
    ]);
    const scaleHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>elementInfo.height * canvasScale, [
        elementInfo.height,
        canvasScale
    ]);
    const { resizeHandlers, borderLines } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useCommonOperate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCommonOperate"])(scaleWidth, scaleHeight);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "table-element-operate",
        children: [
            borderLines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$BorderLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BorderLine"], {
                    type: line.type,
                    style: line.style,
                    className: "operate-border-line"
                }, line.type, false, {
                    fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/TableElementOperate.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)),
            handlerVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    resizeHandlers.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$ResizeHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizeHandler"], {
                            type: point.direction,
                            rotate: elementInfo.rotate,
                            style: point.style,
                            className: "operate-resize-handler",
                            onMouseDown: (e)=>{
                                e.stopPropagation();
                                scaleElement(e, elementInfo, point.direction);
                            }
                        }, point.direction, false, {
                            fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/TableElementOperate.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$RotateHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RotateHandler"], {
                        className: "operate-rotate-handler",
                        style: {
                            left: scaleWidth / 2 + 'px'
                        },
                        onMouseDown: (e)=>{
                            e.stopPropagation();
                            rotateElement(e, elementInfo);
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/TableElementOperate.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/TableElementOperate.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/Operate/CommonElementOperate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommonElementOperate",
    ()=>CommonElementOperate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useCommonOperate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/hooks/useCommonOperate.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$RotateHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/RotateHandler.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$ResizeHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/ResizeHandler.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$BorderLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/BorderLine.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function CommonElementOperate({ elementInfo, handlerVisible, rotateElement, scaleElement }) {
    const canvasScale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasScale();
    const scaleWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>elementInfo.width * canvasScale, [
        elementInfo.width,
        canvasScale
    ]);
    const scaleHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>elementInfo.height * canvasScale, [
        elementInfo.height,
        canvasScale
    ]);
    const { resizeHandlers, borderLines } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useCommonOperate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCommonOperate"])(scaleWidth, scaleHeight);
    const cannotRotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            'chart',
            'video',
            'audio'
        ].includes(elementInfo.type), [
        elementInfo.type
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "common-element-operate",
        children: [
            borderLines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$BorderLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BorderLine"], {
                    type: line.type,
                    style: line.style,
                    className: "operate-border-line"
                }, line.type, false, {
                    fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/CommonElementOperate.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)),
            handlerVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    resizeHandlers.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$ResizeHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizeHandler"], {
                            type: point.direction,
                            rotate: elementInfo.rotate,
                            style: point.style,
                            className: "operate-resize-handler",
                            onMouseDown: (e)=>{
                                e.stopPropagation();
                                scaleElement(e, elementInfo, point.direction);
                            }
                        }, point.direction, false, {
                            fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/CommonElementOperate.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)),
                    !cannotRotate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$RotateHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RotateHandler"], {
                        className: "operate-rotate-handler",
                        style: {
                            left: scaleWidth / 2 + 'px'
                        },
                        onMouseDown: (e)=>{
                            e.stopPropagation();
                            rotateElement(e, elementInfo);
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/CommonElementOperate.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/CommonElementOperate.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/Operate/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Operate",
    ()=>Operate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contexts/scene-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/slides.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$ImageElementOperate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/ImageElementOperate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$TextElementOperate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/TextElementOperate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$ShapeElementOperate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/ShapeElementOperate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$LineElementOperate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/LineElementOperate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$TableElementOperate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/TableElementOperate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$CommonElementOperate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/CommonElementOperate.tsx [app-ssr] (ecmascript)");
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
function Operate({ elementInfo, isSelected, isActive, isActiveGroupElement, isMultiSelect, rotateElement, scaleElement, dragLineElement, moveShapeKeypoint, openLinkDialog: _openLinkDialog }) {
    const canvasScale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasScale();
    const toolbarState = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.toolbarState();
    // Get the formatted animations using a proper selector to avoid infinite loops
    const currentSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneSelector"])((content)=>content.canvas);
    const formatedAnimations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!currentSlide?.animations) return [];
        const els = currentSlide.elements;
        const elIds = els.map((el)=>el.id);
        const animations = currentSlide.animations.filter((animation)=>elIds.includes(animation.elId));
        const formatedAnimations = [];
        for (const animation of animations){
            if (animation.trigger === 'click' || !formatedAnimations.length) {
                formatedAnimations.push({
                    animations: [
                        animation
                    ],
                    autoNext: false
                });
            } else if (animation.trigger === 'meantime') {
                const last = formatedAnimations[formatedAnimations.length - 1];
                last.animations = last.animations.filter((item)=>item.elId !== animation.elId);
                last.animations.push(animation);
                formatedAnimations[formatedAnimations.length - 1] = last;
            } else if (animation.trigger === 'auto') {
                const last = formatedAnimations[formatedAnimations.length - 1];
                last.autoNext = true;
                formatedAnimations[formatedAnimations.length - 1] = last;
                formatedAnimations.push({
                    animations: [
                        animation
                    ],
                    autoNext: false
                });
            }
        }
        return formatedAnimations;
    }, [
        currentSlide
    ]);
    const CurrentOperateComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- element operate components have varying prop signatures
        const elementTypeMap = {
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].IMAGE]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$ImageElementOperate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageElementOperate"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].TEXT]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$TextElementOperate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextElementOperate"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].SHAPE]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$ShapeElementOperate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShapeElementOperate"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].LINE]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$LineElementOperate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineElementOperate"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].TABLE]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$TableElementOperate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableElementOperate"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].CHART]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$CommonElementOperate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonElementOperate"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].LATEX]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$CommonElementOperate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonElementOperate"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].VIDEO]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$CommonElementOperate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonElementOperate"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].AUDIO]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$CommonElementOperate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonElementOperate"]
        };
        return elementTypeMap[elementInfo.type] || null;
    }, [
        elementInfo.type
    ]);
    const elementIndexListInAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!formatedAnimations) return [];
        const indexList = [];
        for(let i = 0; i < formatedAnimations.length; i++){
            const elIds = formatedAnimations[i].animations.map((item)=>item.elId);
            if (elIds.includes(elementInfo.id)) indexList.push(i);
        }
        return indexList;
    }, [
        formatedAnimations,
        elementInfo.id
    ]);
    const rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>'rotate' in elementInfo ? elementInfo.rotate : 0, [
        elementInfo
    ]);
    const height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>'height' in elementInfo ? elementInfo.height : 0, [
        elementInfo
    ]);
    const handlerVisible = !elementInfo.lock && (isActiveGroupElement || !isMultiSelect);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `operate absolute z-43 select-none ${isMultiSelect && !isActive ? 'opacity-20' : ''}`,
        style: {
            top: elementInfo.top * canvasScale + 'px',
            left: elementInfo.left * canvasScale + 'px',
            transform: `rotate(${rotate}deg)`,
            transformOrigin: `${elementInfo.width * canvasScale / 2}px ${height * canvasScale / 2}px`,
            pointerEvents: 'auto'
        },
        children: [
            isSelected && CurrentOperateComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrentOperateComponent, {
                elementInfo: elementInfo,
                handlerVisible: handlerVisible,
                rotateElement: rotateElement,
                scaleElement: scaleElement,
                dragLineElement: dragLineElement,
                moveShapeKeypoint: moveShapeKeypoint
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/index.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, this),
            toolbarState === 'elAnimation' && elementIndexListInAnimation.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animation-index absolute top-0 -left-6 text-xs",
                children: elementIndexListInAnimation.map((index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "index-item w-[18px] h-[18px] bg-white text-primary border border-primary flex justify-center items-center mt-[5px] first:mt-0",
                        children: index + 1
                    }, index, false, {
                        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/index.tsx",
                        lineNumber: 162,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/index.tsx",
                lineNumber: 160,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/index.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/Operate/MultiSelectOperate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MultiSelectOperate",
    ()=>MultiSelectOperate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/element.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useCommonOperate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/hooks/useCommonOperate.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$ResizeHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/ResizeHandler.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$BorderLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/BorderLine.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function MultiSelectOperate({ elementList, scaleMultiElement }) {
    const activeElementIdList = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.activeElementIdList();
    const canvasScale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasScale();
    const localActiveElementList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>elementList.filter((el)=>activeElementIdList.includes(el.id)), [
        elementList,
        activeElementIdList
    ]);
    const [range, setRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0
    });
    // Calculate border lines and resize handlers based on the multi-select range on canvas
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(range.maxX - range.minX) * canvasScale, [
        range,
        canvasScale
    ]);
    const height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(range.maxY - range.minY) * canvasScale, [
        range,
        canvasScale
    ]);
    const { resizeHandlers, borderLines } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useCommonOperate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCommonOperate"])(width, height);
    // Calculate the overall range of multi-selected elements on canvas
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const { minX, maxX, minY, maxY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementListRange"])(localActiveElementList);
        // eslint-disable-next-line react-hooks/set-state-in-effect -- DOM measurement requires effect
        setRange({
            minX,
            maxX,
            minY,
            maxY
        });
    }, [
        localActiveElementList
    ]);
    // Disable resize in multi-select: only non-rotated images and shapes can be resized
    const disableResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return localActiveElementList.some((item)=>{
            if ((item.type === 'image' || item.type === 'shape') && !item.rotate) return false;
            return true;
        });
    }, [
        localActiveElementList
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "multi-select-operate absolute top-0 left-0 z-44",
        style: {
            left: range.minX * canvasScale + 'px',
            top: range.minY * canvasScale + 'px',
            pointerEvents: 'auto'
        },
        children: [
            borderLines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$BorderLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BorderLine"], {
                    type: line.type,
                    style: line.style
                }, line.type, false, {
                    fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/MultiSelectOperate.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)),
            !disableResize && resizeHandlers.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$ResizeHandler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizeHandler"], {
                    type: point.direction,
                    style: point.style,
                    onMouseDown: (e)=>{
                        e.stopPropagation();
                        scaleMultiElement(e, range, point.direction);
                    }
                }, point.direction, false, {
                    fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/MultiSelectOperate.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/Operate/MultiSelectOperate.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/ElementCreateSelection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElementCreateSelection",
    ()=>ElementCreateSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/keyboard.ts [app-ssr] (ecmascript)");
;
;
;
;
function ElementCreateSelection({ onCreated }) {
    const creatingElement = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.creatingElement();
    const setCreatingElement = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setCreatingElement();
    const ctrlOrShiftKeyActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKeyboardStore"])((state)=>state.ctrlOrShiftKeyActive());
    const [start, setStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const [end, setEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const selectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [offset, setOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!selectionRef.current) return;
        const { x, y } = selectionRef.current.getBoundingClientRect();
        setOffset({
            x,
            y
        });
    }, []);
    // Mouse drag to create element: determine position and size
    // Get the start and end positions of the selection range
    const createSelection = (e)=>{
        let isMouseDown = true;
        const startPageX = e.pageX;
        const startPageY = e.pageY;
        setStart([
            startPageX,
            startPageY
        ]);
        const handleMouseMove = (e)=>{
            if (!creatingElement || !isMouseDown) return;
            let currentPageX = e.pageX;
            let currentPageY = e.pageY;
            // When Ctrl or Shift is held:
            // For non-line elements, lock aspect ratio; for line elements, lock to horizontal or vertical direction
            if (ctrlOrShiftKeyActive) {
                const moveX = currentPageX - startPageX;
                const moveY = currentPageY - startPageY;
                // Horizontal and vertical drag distances; use the larger one as the base for computing the other
                const absX = Math.abs(moveX);
                const absY = Math.abs(moveY);
                if (creatingElement.type === 'shape') {
                    // Check if dragging in reverse direction: top-left to bottom-right is forward, everything else is reverse
                    const isOpposite = moveY > 0 && moveX < 0 || moveY < 0 && moveX > 0;
                    if (absX > absY) {
                        currentPageY = isOpposite ? startPageY - moveX : startPageY + moveX;
                    } else {
                        currentPageX = isOpposite ? startPageX - moveY : startPageX + moveY;
                    }
                } else if (creatingElement.type === 'line') {
                    if (absX > absY) currentPageY = startPageY;
                    else currentPageX = startPageX;
                }
            }
            setEnd([
                currentPageX,
                currentPageY
            ]);
        };
        const handleMouseUp = (e)=>{
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            if (e.button === 2) {
                setTimeout(()=>setCreatingElement(null), 0);
                return;
            }
            isMouseDown = false;
            const endPageX = e.pageX;
            const endPageY = e.pageY;
            const minSize = 30;
            if (creatingElement?.type === 'line' && (Math.abs(endPageX - startPageX) >= minSize || Math.abs(endPageY - startPageY) >= minSize)) {
                onCreated({
                    start: [
                        startPageX,
                        startPageY
                    ],
                    end: [
                        endPageX,
                        endPageY
                    ]
                });
            } else if (creatingElement?.type !== 'line' && Math.abs(endPageX - startPageX) >= minSize && Math.abs(endPageY - startPageY) >= minSize) {
                onCreated({
                    start: [
                        startPageX,
                        startPageY
                    ],
                    end: [
                        endPageX,
                        endPageY
                    ]
                });
            } else {
                const defaultSize = 200;
                const minX = Math.min(endPageX, startPageX);
                const minY = Math.min(endPageY, startPageY);
                const maxX = Math.max(endPageX, startPageX);
                const maxY = Math.max(endPageY, startPageY);
                const offsetX = maxX - minX >= minSize ? maxX - minX : defaultSize;
                const offsetY = maxY - minY >= minSize ? maxY - minY : defaultSize;
                onCreated({
                    start: [
                        minX,
                        minY
                    ],
                    end: [
                        minX + offsetX,
                        minY + offsetY
                    ]
                });
            }
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };
    // Line drawing path data (only used when creating element type is line)
    const lineData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!start || !end) return null;
        if (!creatingElement || creatingElement.type !== 'line') return null;
        const [_startX, _startY] = start;
        const [_endX, _endY] = end;
        const minX = Math.min(_startX, _endX);
        const maxX = Math.max(_startX, _endX);
        const minY = Math.min(_startY, _endY);
        const maxY = Math.max(_startY, _endY);
        const svgWidth = maxX - minX >= 24 ? maxX - minX : 24;
        const svgHeight = maxY - minY >= 24 ? maxY - minY : 24;
        const startX = _startX === minX ? 0 : maxX - minX;
        const startY = _startY === minY ? 0 : maxY - minY;
        const endX = _endX === minX ? 0 : maxX - minX;
        const endY = _endY === minY ? 0 : maxY - minY;
        const path = `M${startX}, ${startY} L${endX}, ${endY}`;
        return {
            svgWidth,
            svgHeight,
            path
        };
    }, [
        start,
        end,
        creatingElement
    ]);
    // Calculate element position and size from the selection start and end positions
    const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!start || !end) return {};
        const [startX, startY] = start;
        const [endX, endY] = end;
        const minX = Math.min(startX, endX);
        const maxX = Math.max(startX, endX);
        const minY = Math.min(startY, endY);
        const maxY = Math.max(startY, endY);
        const width = maxX - minX;
        const height = maxY - minY;
        return {
            left: minX - offset.x + 'px',
            top: minY - offset.y + 'px',
            width: width + 'px',
            height: height + 'px'
        };
    }, [
        start,
        end,
        offset
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: selectionRef,
        className: "element-create-selection absolute top-0 left-0 w-full h-full z-[2] cursor-crosshair",
        onMouseDown: (e)=>{
            e.stopPropagation();
            createSelection(e);
        },
        onContextMenu: (e)=>{
            e.stopPropagation();
            e.preventDefault();
        },
        children: start && end && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `selection absolute opacity-80 ${creatingElement?.type !== 'line' ? 'border border-primary' : ''}`,
            style: position,
            children: creatingElement?.type === 'line' && lineData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "overflow-visible",
                width: lineData.svgWidth,
                height: lineData.svgHeight,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: lineData.path,
                    stroke: "#d14424",
                    fill: "none",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/components/slide-renderer/Editor/Canvas/ElementCreateSelection.tsx",
                    lineNumber: 193,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/Editor/Canvas/ElementCreateSelection.tsx",
                lineNumber: 192,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/Editor/Canvas/ElementCreateSelection.tsx",
            lineNumber: 186,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/ElementCreateSelection.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/ShapeCreateCanvas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShapeCreateCanvas",
    ()=>ShapeCreateCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/keyboard.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contexts/scene-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/sonner@2.0.7_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
function ShapeCreateCanvas({ onCreated }) {
    const ctrlOrShiftKeyActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKeyboardStore"])((state)=>state.ctrlOrShiftKeyActive());
    const setCreatingCustomShapeState = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setCreatingCustomShapeState();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneSelector"])((content)=>content.canvas.theme);
    const shapeCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMouseDown, setIsMouseDown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [offset, setOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [points, setPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [closed, setClosed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setCreatingCustomShapeState(false);
    }, [
        setCreatingCustomShapeState
    ]);
    const getCreateData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((closeShape = true)=>{
        const xList = points.map((item)=>item[0]);
        const yList = points.map((item)=>item[1]);
        const minX = Math.min(...xList);
        const minY = Math.min(...yList);
        const maxX = Math.max(...xList);
        const maxY = Math.max(...yList);
        const formatedPoints = points.map((point)=>{
            return [
                point[0] - minX,
                point[1] - minY
            ];
        });
        let pathStr = '';
        for(let i = 0; i < formatedPoints.length; i++){
            const point = formatedPoints[i];
            if (i === 0) pathStr += `M ${point[0]} ${point[1]} `;
            else pathStr += `L ${point[0]} ${point[1]} `;
        }
        if (closeShape) pathStr += 'Z';
        const start = [
            minX + offset.x,
            minY + offset.y
        ];
        const end = [
            maxX + offset.x,
            maxY + offset.y
        ];
        const viewBox = [
            maxX - minX,
            maxY - minY
        ];
        return {
            start,
            end,
            path: pathStr,
            viewBox
        };
    }, [
        points,
        offset
    ]);
    const create = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        onCreated({
            ...getCreateData(false),
            fill: 'rgba(0, 0, 0, 0)',
            outline: {
                width: 2,
                color: theme.themeColors[0],
                style: 'solid'
            }
        });
        close();
    }, [
        onCreated,
        getCreateData,
        theme,
        close
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!shapeCanvasRef.current) return;
        const { x, y } = shapeCanvasRef.current.getBoundingClientRect();
        setOffset({
            x,
            y
        });
        // Show instruction toast
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sonner$40$2$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info('Click to draw any shape, close the path to finish, press ESC or right-click to cancel, press ENTER to finish early');
        const handleKeyDown = (e)=>{
            const key = e.key.toUpperCase();
            if (key === 'ESCAPE') close();
            if (key === 'ENTER') create();
        };
        document.addEventListener('keydown', handleKeyDown);
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [
        close,
        create
    ]);
    const getPoint = (e, custom = false)=>{
        let pageX = e.pageX - offset.x;
        let pageY = e.pageY - offset.y;
        if (custom) return {
            pageX,
            pageY
        };
        if (ctrlOrShiftKeyActive && points.length) {
            const [lastPointX, lastPointY] = points[points.length - 1];
            if (Math.abs(lastPointX - pageX) - Math.abs(lastPointY - pageY) > 0) {
                pageY = lastPointY;
            } else pageX = lastPointX;
        }
        return {
            pageX,
            pageY
        };
    };
    const updateMousePosition = (e)=>{
        if (isMouseDown) {
            const { pageX, pageY } = getPoint(e, true);
            setPoints([
                ...points,
                [
                    pageX,
                    pageY
                ]
            ]);
            setMousePosition(null);
            return;
        }
        const { pageX, pageY } = getPoint(e);
        setMousePosition([
            pageX,
            pageY
        ]);
        if (points.length >= 2) {
            const [firstPointX, firstPointY] = points[0];
            if (Math.abs(firstPointX - pageX) < 5 && Math.abs(firstPointY - pageY) < 5) {
                setClosed(true);
            } else setClosed(false);
        } else setClosed(false);
    };
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let d = '';
        for(let i = 0; i < points.length; i++){
            const point = points[i];
            if (i === 0) d += `M ${point[0]} ${point[1]} `;
            else d += `L ${point[0]} ${point[1]} `;
        }
        if (points.length && mousePosition) {
            d += `L ${mousePosition[0]} ${mousePosition[1]}`;
        }
        return d;
    }, [
        points,
        mousePosition
    ]);
    const addPoint = (e)=>{
        const { pageX, pageY } = getPoint(e);
        setIsMouseDown(true);
        if (closed) {
            onCreated(getCreateData());
        } else {
            setPoints([
                ...points,
                [
                    pageX,
                    pageY
                ]
            ]);
        }
        const handleMouseUp = ()=>{
            setIsMouseDown(false);
            document.removeEventListener('mouseup', handleMouseUp);
        };
        document.addEventListener('mouseup', handleMouseUp);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: shapeCanvasRef,
        className: "shape-create-canvas absolute top-0 left-0 w-full h-full z-[2] cursor-crosshair",
        onMouseDown: (e)=>{
            e.stopPropagation();
            addPoint(e);
        },
        onMouseMove: updateMousePosition,
        onContextMenu: (e)=>{
            e.stopPropagation();
            e.preventDefault();
            close();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-full h-full overflow-visible",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: path,
                stroke: "#d14424",
                fill: closed ? 'rgba(226, 83, 77, 0.15)' : 'none',
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/Editor/Canvas/ShapeCreateCanvas.tsx",
                lineNumber: 181,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/Editor/Canvas/ShapeCreateCanvas.tsx",
            lineNumber: 180,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/ShapeCreateCanvas.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/Ruler.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Ruler",
    ()=>Ruler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/element.ts [app-ssr] (ecmascript)");
;
;
;
;
function Ruler({ viewportStyles, elementList }) {
    const canvasScale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasScale();
    const activeElementIdList = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.activeElementIdList();
    const viewportRatio = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.viewportRatio();
    const viewportSize = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.viewportSize();
    const [elementListRange, setElementListRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const els = elementList.filter((el)=>activeElementIdList.includes(el.id));
        if (!els.length) {
            // eslint-disable-next-line react-hooks/set-state-in-effect -- DOM measurement requires effect
            setElementListRange(null);
        } else {
            setElementListRange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$element$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementListRange"])(els));
        }
    }, [
        elementList,
        activeElementIdList
    ]);
    const markerSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return viewportStyles.width * canvasScale / (viewportSize / 100);
    }, [
        viewportStyles.width,
        canvasScale,
        viewportSize
    ]);
    const markers = Array.from({
        length: 20
    }, (_, i)=>i + 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ruler text-xs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "corner absolute bg-white border border-gray-200 w-5 h-5",
                style: {
                    left: viewportStyles.left - 25 + 'px',
                    top: viewportStyles.top - 25 + 'px'
                }
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/Editor/Canvas/Ruler.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h absolute bg-white border border-gray-200 h-5 flex justify-between items-center overflow-hidden",
                style: {
                    width: viewportStyles.width * canvasScale + 'px',
                    left: viewportStyles.left + 'px',
                    top: viewportStyles.top - 25 + 'px'
                },
                children: [
                    markers.map((marker)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `ruler-marker-100 h-full leading-5 text-right flex-shrink-0 pr-[5px] relative ${markerSize < 36 ? '[&>span]:hidden' : ''} ${markerSize < 72 ? 'before:hidden' : ''}`,
                            style: {
                                width: markerSize + 'px'
                            },
                            children: [
                                marker * 100 <= viewportSize && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: marker * 100
                                }, void 0, false, {
                                    fileName: "[project]/components/slide-renderer/Editor/Canvas/Ruler.tsx",
                                    lineNumber: 66,
                                    columnNumber: 46
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-0 bottom-0 w-[0.1px] h-3 bg-gray-600 last:content-none"
                                }, void 0, false, {
                                    fileName: "[project]/components/slide-renderer/Editor/Canvas/Ruler.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-1/2 bottom-0 w-[0.1px] h-2 bg-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/components/slide-renderer/Editor/Canvas/Ruler.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, `h-marker-100-${marker}`, true, {
                            fileName: "[project]/components/slide-renderer/Editor/Canvas/Ruler.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)),
                    elementListRange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "range absolute top-0 bottom-0 bg-primary/10",
                        style: {
                            left: elementListRange.minX * canvasScale + 'px',
                            width: (elementListRange.maxX - elementListRange.minX) * canvasScale + 'px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/Editor/Canvas/Ruler.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/slide-renderer/Editor/Canvas/Ruler.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "v absolute bg-white border border-gray-200 w-5 overflow-hidden",
                style: {
                    height: viewportStyles.height * canvasScale + 'px',
                    top: viewportStyles.top + 'px',
                    left: viewportStyles.left - 25 + 'px'
                },
                children: [
                    markers.map((marker)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `ruler-marker-100 w-full leading-5 text-right pb-[5px] relative [writing-mode:vertical-rl] ${markerSize < 36 ? '[&>span]:hidden' : ''} ${markerSize < 72 ? 'before:hidden' : ''}`,
                            style: {
                                height: markerSize + 'px'
                            },
                            children: [
                                marker * 100 <= viewportSize * viewportRatio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: marker * 100
                                }, void 0, false, {
                                    fileName: "[project]/components/slide-renderer/Editor/Canvas/Ruler.tsx",
                                    lineNumber: 102,
                                    columnNumber: 62
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 right-0 h-[0.1px] w-3 bg-gray-600 last:content-none"
                                }, void 0, false, {
                                    fileName: "[project]/components/slide-renderer/Editor/Canvas/Ruler.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-1/2 right-0 h-[0.1px] w-2 bg-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/components/slide-renderer/Editor/Canvas/Ruler.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, `v-marker-100-${marker}`, true, {
                            fileName: "[project]/components/slide-renderer/Editor/Canvas/Ruler.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)),
                    elementListRange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "range absolute left-0 right-0 bg-primary/10",
                        style: {
                            top: elementListRange.minY * canvasScale + 'px',
                            height: (elementListRange.maxY - elementListRange.minY) * canvasScale + 'px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/Editor/Canvas/Ruler.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/slide-renderer/Editor/Canvas/Ruler.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/Ruler.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/GridLines.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GridLines",
    ()=>GridLines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contexts/scene-context.tsx [app-ssr] (ecmascript)");
;
;
;
function GridLines() {
    const gridLineSize = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.gridLineSize();
    const viewportRatio = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.viewportRatio();
    const viewportSize = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.viewportSize();
    const background = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneSelector"])((content)=>content.canvas.background);
    // Calculate grid line color to avoid blending with background
    const gridColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const bgColor = background?.color || '#fff';
        // Simplified version: choose black or white based on background brightness
        const isLight = bgColor === '#fff' || bgColor.startsWith('#f') || bgColor.startsWith('#e');
        const baseColor = isLight ? '0, 0, 0' : '255, 255, 255';
        return `rgba(${baseColor}, 0.5)`;
    }, [
        background
    ]);
    // Grid path
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const maxX = viewportSize;
        const maxY = viewportSize * viewportRatio;
        let p = '';
        for(let i = 0; i <= Math.floor(maxY / gridLineSize); i++){
            p += `M0 ${i * gridLineSize} L${maxX} ${i * gridLineSize} `;
        }
        for(let i = 0; i <= Math.floor(maxX / gridLineSize); i++){
            p += `M${i * gridLineSize} 0 L${i * gridLineSize} ${maxY} `;
        }
        return p;
    }, [
        viewportSize,
        viewportRatio,
        gridLineSize
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "grid-lines absolute inset-0 pointer-events-none z-40",
        width: viewportSize,
        height: viewportSize * viewportRatio,
        viewBox: `0 0 ${viewportSize} ${viewportSize * viewportRatio}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: path,
            fill: "none",
            stroke: gridColor,
            strokeWidth: "1",
            strokeDasharray: "5 5"
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/Editor/Canvas/GridLines.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/GridLines.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/Canvas/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Canvas",
    ()=>Canvas,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contexts/scene-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/keyboard.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useViewportSize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/hooks/useViewportSize.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useSelectElement$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/hooks/useSelectElement.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useDragElement$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/hooks/useDragElement.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useRotateElement$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/hooks/useRotateElement.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useMouseSelection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/hooks/useMouseSelection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useScaleElement$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/hooks/useScaleElement.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useDragLineElement$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/hooks/useDragLineElement.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useMoveShapeKeypoint$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/hooks/useMoveShapeKeypoint.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useInsertFromCreateSelection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/hooks/useInsertFromCreateSelection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useDrop$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/hooks/useDrop.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$AlignmentLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/AlignmentLine.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$MouseSelection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/MouseSelection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$ViewportBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/ViewportBackground.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$EditableElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/EditableElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$MultiSelectOperate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Operate/MultiSelectOperate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$ElementCreateSelection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/ElementCreateSelection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$ShapeCreateCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/ShapeCreateCanvas.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Ruler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/Ruler.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$GridLines$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/GridLines.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-canvas-operations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/context-menu.tsx [app-ssr] (ecmascript)");
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
function Canvas(_props) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const viewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Subscribe to specific parts for performance optimization
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneSelector"])((content)=>content.canvas.elements);
    // Canvas UI state
    const canvasScale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasScale();
    const activeElementIdList = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.activeElementIdList();
    const activeGroupElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.activeGroupElementId();
    const handleElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.handleElementId();
    const hiddenElementIdList = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.hiddenElementIdList();
    const creatingElement = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.creatingElement();
    const creatingCustomShape = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.creatingCustomShape();
    const showRuler = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.showRuler();
    const gridLineSize = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.gridLineSize();
    const setActiveElementIdList = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setActiveElementIdList();
    const setGridLineSize = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setGridLineSize();
    const setRulerState = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.setRulerState();
    // Keyboard state
    const spaceKeyState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$keyboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKeyboardStore"])((state)=>state.spaceKeyState);
    const [alignmentLines, setAlignmentLines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [linkDialogVisible, setLinkDialogVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Local element list for drag/scale/rotate operations
    const elementListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(elements || []);
    const [elementList, setElementList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(elements || []);
    // Sync store elements to local state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const newElements = elements ? JSON.parse(JSON.stringify(elements)) : [];
        elementListRef.current = newElements;
        // eslint-disable-next-line react-hooks/set-state-in-effect -- Sync store elements to local state
        setElementList(newElements);
    }, [
        elements
    ]);
    // Viewport size and positioning
    const { viewportStyles, dragViewport } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useViewportSize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useViewportSize"])(canvasRef);
    // Initialize drop handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useDrop$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDrop"])(canvasRef);
    // Element drag (with alignment snapping)
    const { dragElement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useDragElement$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDragElement"])(elementListRef, setElementList, setAlignmentLines);
    // Element selection
    const { selectElement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useSelectElement$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectElement"])(elementListRef, dragElement);
    // Mouse selection
    const { mouseSelection, mouseSelectionVisible, mouseSelectionQuadrant, updateMouseSelection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useMouseSelection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMouseSelection"])(elementListRef, viewportRef);
    // Element operations
    const { scaleElement, scaleMultiElement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useScaleElement$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScaleElement"])(elementListRef, setElementList, setAlignmentLines);
    const { rotateElement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useRotateElement$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRotateElement"])(elementListRef, setElementList, viewportRef, canvasScale);
    const { dragLineElement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useDragLineElement$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDragLineElement"])(elementListRef, setElementList);
    const { moveShapeKeypoint } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useMoveShapeKeypoint$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMoveShapeKeypoint"])(elementListRef, setElementList, canvasScale);
    // Create element from selection
    const { insertElementFromCreateSelection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useInsertFromCreateSelection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInsertFromCreateSelection"])(viewportRef);
    // Click on blank canvas area: clear active elements
    const handleClickBlankArea = (e)=>{
        // Check if the click target is a context menu element (menu content in Portal)
        const target = e.target;
        if (target.closest('[data-slot="context-menu-content"]') || target.closest('[data-slot="context-menu-sub-content"]') || target.closest('[data-slot="context-menu-item"]') || target.closest('[data-slot="context-menu-sub-trigger"]')) {
            return; // Skip blank area handling if clicking on context menu
        }
        if (activeElementIdList.length) {
            setActiveElementIdList([]);
        }
        if (!spaceKeyState) {
            updateMouseSelection(e);
        } else {
            dragViewport(e);
        }
    };
    // Double-click blank area to insert text
    const handleDblClick = (_e)=>{
        if (activeElementIdList.length || creatingElement || creatingCustomShape) return;
        if (!viewportRef.current) return;
        const _viewportRect = viewportRef.current.getBoundingClientRect();
    // TODO: implement createTextElement (use _viewportRect + e.pageX/Y + canvasScale)
    };
    const openLinkDialog = ()=>{
        setLinkDialogVisible(true);
    };
    const { pasteElement, selectAllElements, deleteAllElements } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$canvas$2d$operations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasOperations"])();
    const contextmenus = ()=>{
        return [
            {
                text: '粘贴',
                subText: 'Ctrl + V',
                handler: pasteElement
            },
            {
                text: '全选',
                subText: 'Ctrl + A',
                handler: selectAllElements
            },
            {
                text: '标尺',
                subText: showRuler ? '√' : '',
                handler: ()=>setRulerState(!showRuler)
            },
            {
                text: '网格线',
                handler: ()=>setGridLineSize(gridLineSize ? 0 : 50),
                children: [
                    {
                        text: '无',
                        subText: gridLineSize === 0 ? '√' : '',
                        handler: ()=>setGridLineSize(0)
                    },
                    {
                        text: '小',
                        subText: gridLineSize === 25 ? '√' : '',
                        handler: ()=>setGridLineSize(25)
                    },
                    {
                        text: '中',
                        subText: gridLineSize === 50 ? '√' : '',
                        handler: ()=>setGridLineSize(50)
                    },
                    {
                        text: '大',
                        subText: gridLineSize === 100 ? '√' : '',
                        handler: ()=>setGridLineSize(100)
                    }
                ]
            },
            {
                text: '重置当前页',
                handler: deleteAllElements
            }
        ];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuTrigger"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "canvas relative h-full w-full overflow-hidden bg-gray-100 select-none",
                    ref: canvasRef,
                    onMouseDown: handleClickBlankArea,
                    onDoubleClick: handleDblClick,
                    children: [
                        creatingElement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$ElementCreateSelection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementCreateSelection"], {
                            onCreated: insertElementFromCreateSelection
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                            lineNumber: 237,
                            columnNumber: 13
                        }, this),
                        creatingCustomShape && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$ShapeCreateCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShapeCreateCanvas"], {
                            onCreated: (_data)=>{
                            // TODO: implement insertCustomShape
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "viewport-wrapper absolute shadow-[0_0_0_1px_rgba(0,0,0,0.01),0_0_12px_0_rgba(0,0,0,0.1)]",
                            style: {
                                width: `${viewportStyles.width * canvasScale}px`,
                                height: `${viewportStyles.height * canvasScale}px`,
                                left: `${viewportStyles.left}px`,
                                top: `${viewportStyles.top}px`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "operates absolute top-0 left-0 w-full h-full pointer-events-none",
                                    children: [
                                        alignmentLines.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$AlignmentLine$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlignmentLine"], {
                                                type: line.type,
                                                axis: line.axis,
                                                length: line.length,
                                                canvasScale: canvasScale
                                            }, `${line.type}-${line.axis.x}-${line.axis.y}-${index}`, false, {
                                                fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                                                lineNumber: 263,
                                                columnNumber: 17
                                            }, this)),
                                        activeElementIdList.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$MultiSelectOperate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MultiSelectOperate"], {
                                            elementList: elementList,
                                            scaleMultiElement: scaleMultiElement
                                        }, void 0, false, {
                                            fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, this),
                                        elementList.map((element)=>!hiddenElementIdList.includes(element.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Operate$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Operate"], {
                                                elementInfo: element,
                                                isSelected: activeElementIdList.includes(element.id),
                                                isActive: handleElementId === element.id,
                                                isActiveGroupElement: activeGroupElementId === element.id,
                                                isMultiSelect: activeElementIdList.length > 1,
                                                rotateElement: rotateElement,
                                                scaleElement: scaleElement,
                                                dragLineElement: dragLineElement,
                                                moveShapeKeypoint: moveShapeKeypoint,
                                                openLinkDialog: openLinkDialog
                                            }, element.id, false, {
                                                fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                                                lineNumber: 284,
                                                columnNumber: 21
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$ViewportBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ViewportBackground"], {}, void 0, false, {
                                            fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: viewportRef,
                                    className: "viewport absolute top-0 left-0 origin-top-left",
                                    style: {
                                        width: `${viewportStyles.width}px`,
                                        height: `${viewportStyles.height}px`,
                                        transform: `scale(${canvasScale})`
                                    },
                                    children: [
                                        gridLineSize > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$GridLines$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GridLines"], {}, void 0, false, {
                                            fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                                            lineNumber: 314,
                                            columnNumber: 36
                                        }, this),
                                        mouseSelectionVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$MouseSelection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MouseSelection"], {
                                            top: mouseSelection.top,
                                            left: mouseSelection.left,
                                            width: mouseSelection.width,
                                            height: mouseSelection.height,
                                            quadrant: mouseSelectionQuadrant,
                                            canvasScale: canvasScale
                                        }, void 0, false, {
                                            fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                                            lineNumber: 318,
                                            columnNumber: 17
                                        }, this),
                                        elementList.map((element, index)=>!hiddenElementIdList.includes(element.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$EditableElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditableElement"], {
                                                elementInfo: element,
                                                elementIndex: index + 1,
                                                isMultiSelect: activeElementIdList.length > 1,
                                                selectElement: selectElement,
                                                openLinkDialog: openLinkDialog
                                            }, element.id, false, {
                                                fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                                                lineNumber: 331,
                                                columnNumber: 19
                                            }, this) : null)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this),
                        showRuler && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$Ruler$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ruler"], {
                            viewportStyles: viewportStyles,
                            elementList: elementList
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                            lineNumber: 345,
                            columnNumber: 25
                        }, this),
                        spaceKeyState && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "drag-mask absolute inset-0 cursor-grab"
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                            lineNumber: 348,
                            columnNumber: 29
                        }, this),
                        linkDialogVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "LinkDialog placeholder"
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                            lineNumber: 351,
                            columnNumber: 33
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuContent"], {
                children: contextmenus().map((item, index)=>{
                    if (item.divider) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuSeparator"], {}, index, false, {
                            fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                            lineNumber: 357,
                            columnNumber: 20
                        }, this);
                    }
                    // If has children, use submenu component
                    if (item.children && item.children.length > 0) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuSub"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuSubTrigger"], {
                                    disabled: item.disable,
                                    hidden: item.hide,
                                    children: [
                                        item.text,
                                        item.subText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuShortcut"], {
                                            children: item.subText
                                        }, void 0, false, {
                                            fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                                            lineNumber: 366,
                                            columnNumber: 36
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                                    lineNumber: 364,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuSubContent"], {
                                    children: item.children.map((child, childIndex)=>child.divider ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuSeparator"], {}, childIndex, false, {
                                            fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                                            lineNumber: 371,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuItem"], {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                child.handler?.();
                                            },
                                            disabled: child.disable,
                                            hidden: child.hide,
                                            children: [
                                                child.text,
                                                child.subText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuShortcut"], {
                                                    children: child.subText
                                                }, void 0, false, {
                                                    fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, childIndex, true, {
                                            fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                                            lineNumber: 373,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                                    lineNumber: 368,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                            lineNumber: 363,
                            columnNumber: 15
                        }, this);
                    }
                    // Regular menu item
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuItem"], {
                        onClick: (e)=>{
                            e.stopPropagation();
                            item.handler?.();
                        },
                        disabled: item.disable,
                        hidden: item.hide,
                        children: [
                            item.text,
                            item.subText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$context$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContextMenuShortcut"], {
                                children: item.subText
                            }, void 0, false, {
                                fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                                lineNumber: 406,
                                columnNumber: 32
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                        lineNumber: 396,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/slide-renderer/Editor/Canvas/index.tsx",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Canvas;
}),
"[project]/components/slide-renderer/Editor/ScreenElement.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScreenElement",
    ()=>ScreenElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/slides.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$BaseImageElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ImageElement/BaseImageElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TextElement$2f$BaseTextElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/TextElement/BaseTextElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ShapeElement$2f$BaseShapeElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ShapeElement/BaseShapeElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LineElement$2f$BaseLineElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/LineElement/BaseLineElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ChartElement$2f$BaseChartElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/ChartElement/BaseChartElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LatexElement$2f$BaseLatexElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/LatexElement/BaseLatexElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TableElement$2f$BaseTableElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/TableElement/BaseTableElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$VideoElement$2f$BaseVideoElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/components/element/VideoElement/BaseVideoElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contexts/scene-context.tsx [app-ssr] (ecmascript)");
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
function ScreenElement({ elementInfo, elementIndex, animate }) {
    const CurrentElementComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- element components have varying prop signatures
        const elementTypeMap = {
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].IMAGE]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ImageElement$2f$BaseImageElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseImageElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].TEXT]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TextElement$2f$BaseTextElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseTextElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].SHAPE]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ShapeElement$2f$BaseShapeElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseShapeElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].LINE]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LineElement$2f$BaseLineElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseLineElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].CHART]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$ChartElement$2f$BaseChartElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseChartElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].LATEX]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$LatexElement$2f$BaseLatexElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseLatexElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].TABLE]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$TableElement$2f$BaseTableElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseTableElement"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$slides$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementTypes"].VIDEO]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$components$2f$element$2f$VideoElement$2f$BaseVideoElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseVideoElement"]
        };
        return elementTypeMap[elementInfo.type] || null;
    }, [
        elementInfo.type
    ]);
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneSelector"])((content)=>{
        if (content.type === 'slide') {
            return content.canvas.theme;
        }
        return {
            fontColor: '#333333',
            fontName: 'Microsoft YaHei'
        };
    });
    if (!CurrentElementComponent) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "screen-element",
        id: `screen-element-${elementInfo.id}`,
        style: {
            zIndex: elementIndex,
            color: theme.fontColor,
            fontFamily: theme.fontName
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrentElementComponent, {
            elementInfo: elementInfo,
            animate: animate
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/Editor/ScreenElement.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/Editor/ScreenElement.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/HighlightOverlay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HighlightOverlay",
    ()=>HighlightOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.29.0_react@19.2.3/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contexts/scene-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function HighlightOverlay() {
    const highlightedElementIds = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.highlightedElementIds();
    const highlightOptions = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.highlightOptions();
    // Get the element list of the current scene
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneSelector"])((content)=>content.canvas.elements);
    // Find all elements to highlight (exclude line elements as they have no height property)
    const highlightedElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!highlightedElementIds.length) return [];
        return elements.filter((el)=>highlightedElementIds.includes(el.id) && el.type !== 'line');
    }, [
        elements,
        highlightedElementIds
    ]);
    // Skip rendering if no highlighted elements
    if (!highlightedElements.length || !highlightOptions) {
        return null;
    }
    const { color = '#ff6b6b', opacity = 0.3, borderWidth = 3, animated = true } = highlightOptions;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            highlightedElements.map((element)=>{
                // Type guard: line elements are already filtered out above
                // Use 'in' operator for runtime checks to satisfy TypeScript
                const height = 'height' in element ? element.height : 0;
                const rotate = 'rotate' in element ? element.rotate : 0;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        left: `${element.left}px`,
                        top: `${element.top}px`,
                        width: `${element.width}px`,
                        height: `${height}px`,
                        transform: `rotate(${rotate || 0}deg)`,
                        transformOrigin: 'center',
                        zIndex: 999,
                        transition: 'all 0.3s ease-in-out'
                    },
                    className: "jsx-75d33d7e9285f5f6" + " " + "highlight-overlay absolute pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                border: `${borderWidth}px solid ${color}`,
                                boxShadow: `
                0 0 ${borderWidth * 3}px ${color},
                inset 0 0 ${borderWidth * 2}px rgba(255,255,255,${opacity * 0.5})
              `,
                                backgroundColor: `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`
                            },
                            className: "jsx-75d33d7e9285f5f6" + " " + `absolute inset-0 rounded ${animated ? 'animate-pulse' : ''}`
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/Editor/HighlightOverlay.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this),
                        animated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                border: `${borderWidth}px solid ${color}`,
                                opacity: 0.5,
                                animationDuration: '2s'
                            },
                            className: "jsx-75d33d7e9285f5f6" + " " + "absolute inset-0 rounded animate-ping"
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/Editor/HighlightOverlay.tsx",
                            lineNumber: 84,
                            columnNumber: 15
                        }, this)
                    ]
                }, element.id, true, {
                    fileName: "[project]/components/slide-renderer/Editor/HighlightOverlay.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "75d33d7e9285f5f6",
                children: "@keyframes breathe{0%,to{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.02)}}.highlight-overlay.animate-pulse.jsx-75d33d7e9285f5f6{animation:2s ease-in-out infinite breathe}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/slide-renderer/Editor/SpotlightOverlay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpotlightOverlay",
    ()=>SpotlightOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$35$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.35.2_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$35$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.35.2_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contexts/scene-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function SpotlightOverlay() {
    const spotlightElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.spotlightElementId();
    const spotlightOptions = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.spotlightOptions();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [rect, setRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneSelector"])((content)=>content.canvas.elements);
    // Compute target element position in SVG coordinate system via DOM measurement
    const measure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!spotlightElementId || !containerRef.current) {
            setRect(null);
            return;
        }
        const domElement = document.getElementById(`screen-element-${spotlightElementId}`);
        if (!domElement) {
            setRect(null);
            return;
        }
        // Prefer measuring .element-content (the actual rendered area for auto-height)
        const contentEl = domElement.querySelector('.element-content');
        const targetEl = contentEl ?? domElement;
        const containerRect = containerRef.current.getBoundingClientRect();
        const targetRect = targetEl.getBoundingClientRect();
        if (containerRect.width === 0 || containerRect.height === 0) {
            setRect(null);
            return;
        }
        // Convert to SVG viewBox 0-100 coordinates
        setRect({
            x: (targetRect.left - containerRect.left) / containerRect.width * 100,
            y: (targetRect.top - containerRect.top) / containerRect.height * 100,
            w: targetRect.width / containerRect.width * 100,
            h: targetRect.height / containerRect.height * 100
        });
    }, [
        spotlightElementId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect -- DOM measurement requires effect
        measure();
    }, [
        measure,
        elements
    ]);
    const active = !!spotlightElementId && !!spotlightOptions && !!rect;
    const dimness = spotlightOptions?.dimness ?? 0.7;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "absolute inset-0 z-[100] pointer-events-none overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$35$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: active && rect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$35$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    className: "absolute inset-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                id: `mask-${spotlightElementId}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "0",
                                        y: "0",
                                        width: "100",
                                        height: "100",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/components/slide-renderer/Editor/SpotlightOverlay.tsx",
                                        lineNumber: 99,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$35$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].rect, {
                                        fill: "black",
                                        initial: {
                                            x: rect.x - 8,
                                            y: rect.y - 8,
                                            width: rect.w + 16,
                                            height: rect.h + 16,
                                            rx: 4
                                        },
                                        animate: {
                                            x: rect.x - 0.4,
                                            y: rect.y - 0.6,
                                            width: rect.w + 0.8,
                                            height: rect.h + 1.2,
                                            rx: 1
                                        },
                                        transition: {
                                            duration: 0.6,
                                            ease: [
                                                0.16,
                                                1,
                                                0.3,
                                                1
                                            ]
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/slide-renderer/Editor/SpotlightOverlay.tsx",
                                        lineNumber: 101,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/slide-renderer/Editor/SpotlightOverlay.tsx",
                                lineNumber: 97,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/Editor/SpotlightOverlay.tsx",
                            lineNumber: 96,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "100",
                            height: "100",
                            fill: `rgba(0,0,0,${dimness})`,
                            mask: `url(#mask-${spotlightElementId})`,
                            className: "backdrop-blur-[1.5px]"
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/Editor/SpotlightOverlay.tsx",
                            lineNumber: 126,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$35$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].rect, {
                            initial: {
                                x: rect.x - 4,
                                y: rect.y - 4,
                                width: rect.w + 8,
                                height: rect.h + 8,
                                opacity: 0,
                                rx: 2
                            },
                            animate: {
                                x: rect.x - 0.4,
                                y: rect.y - 0.6,
                                width: rect.w + 0.8,
                                height: rect.h + 1.2,
                                opacity: 1,
                                rx: 1
                            },
                            fill: "none",
                            stroke: "rgba(255,255,255,0.7)",
                            strokeWidth: "1.2",
                            style: {
                                vectorEffect: 'non-scaling-stroke'
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.05,
                                ease: [
                                    0.16,
                                    1,
                                    0.3,
                                    1
                                ]
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/Editor/SpotlightOverlay.tsx",
                            lineNumber: 135,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/slide-renderer/Editor/SpotlightOverlay.tsx",
                    lineNumber: 89,
                    columnNumber: 13
                }, this)
            }, `spotlight-${spotlightElementId}`, false, {
                fileName: "[project]/components/slide-renderer/Editor/SpotlightOverlay.tsx",
                lineNumber: 82,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/Editor/SpotlightOverlay.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/Editor/SpotlightOverlay.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/LaserOverlay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LaserOverlay",
    ()=>LaserOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$35$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.35.2_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function LaserOverlay({ geometry, color = '#ff3b30', duration: _duration = 3000 }) {
    const { centerX, centerY } = geometry;
    const startPos = {
        x: centerX > 50 ? 105 : -5,
        y: centerY > 50 ? 105 : -5
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$35$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            left: `${startPos.x}%`,
            top: `${startPos.y}%`
        },
        animate: {
            opacity: 1,
            left: `${centerX}%`,
            top: `${centerY}%`
        },
        exit: {
            opacity: 0,
            left: `${startPos.x}%`,
            top: `${startPos.y}%`,
            transition: {
                duration: 0.25,
                ease: [
                    0.4,
                    0,
                    1,
                    1
                ]
            }
        },
        transition: {
            left: {
                duration: 0.5,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            },
            top: {
                duration: 0.5,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            },
            opacity: {
                duration: 0.15
            }
        },
        className: "absolute z-[101] pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative -translate-x-1/2 -translate-y-1/2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$35$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        scale: [
                            1,
                            2.8
                        ],
                        opacity: [
                            0.6,
                            0
                        ]
                    },
                    transition: {
                        repeat: Infinity,
                        duration: 1.5,
                        ease: 'easeOut',
                        repeatDelay: 0.3
                    },
                    className: "absolute inset-0 rounded-full",
                    style: {
                        border: `1.5px solid ${color}`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/slide-renderer/Editor/LaserOverlay.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2.5 h-2.5 rounded-full",
                    style: {
                        backgroundColor: color,
                        boxShadow: `0 0 8px 2px ${color}60`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/slide-renderer/Editor/LaserOverlay.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/slide-renderer/Editor/LaserOverlay.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, `laser-${centerX}-${centerY}`, false, {
        fileName: "[project]/components/slide-renderer/Editor/LaserOverlay.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/ScreenCanvas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScreenCanvas",
    ()=>ScreenCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$ScreenElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/ScreenElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$HighlightOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/HighlightOverlay.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$SpotlightOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/SpotlightOverlay.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$LaserOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/LaserOverlay.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$slide$2d$background$2d$style$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/use-slide-background-style.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/store/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store/canvas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contexts/scene-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$geometry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/geometry.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useViewportSize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/hooks/useViewportSize.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$35$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.35.2_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
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
function ScreenCanvas() {
    const canvasScale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.canvasScale();
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneSelector"])((content)=>content.canvas.elements);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Viewport size and positioning
    const { viewportStyles } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$hooks$2f$useViewportSize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useViewportSize"])(canvasRef);
    // Get background style
    const background = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contexts$2f$scene$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSceneSelector"])((content)=>content.canvas.background);
    const { backgroundStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$use$2d$slide$2d$background$2d$style$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSlideBackgroundStyle"])(background);
    // Get visual effect state
    const laserElementId = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.laserElementId();
    const laserOptions = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.laserOptions();
    const zoomTarget = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2f$canvas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanvasStore"].use.zoomTarget();
    // Compute laser pointer geometry
    const laserGeometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!laserElementId) return null;
        const element = elements.find((el)=>el.id === laserElementId);
        if (!element) return null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$geometry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findElementGeometry"])({
            type: 'slide',
            content: {
                canvas: {
                    elements
                }
            }
        }, laserElementId);
    }, [
        laserElementId,
        elements
    ]);
    // Compute zoom target geometry
    const zoomGeometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!zoomTarget) return null;
        const element = elements.find((el)=>el.id === zoomTarget.elementId);
        if (!element) return null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$geometry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findElementGeometry"])({
            type: 'slide',
            content: {
                canvas: {
                    elements
                }
            }
        }, zoomTarget.elementId);
    }, [
        zoomTarget,
        elements
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full w-full overflow-hidden select-none",
        ref: canvasRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute shadow-[0_0_0_1px_rgba(0,0,0,0.01),0_0_12px_0_rgba(0,0,0,0.1)] rounded-lg overflow-hidden transition-transform duration-700",
            style: {
                width: `${viewportStyles.width * canvasScale}px`,
                height: `${viewportStyles.height * canvasScale}px`,
                left: `${viewportStyles.left}px`,
                top: `${viewportStyles.top}px`,
                ...zoomTarget && zoomGeometry ? {
                    transform: `scale(${zoomTarget.scale})`,
                    transformOrigin: `${zoomGeometry.centerX}% ${zoomGeometry.centerY}%`
                } : {}
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full bg-position-center rounded-lg",
                    style: {
                        ...backgroundStyle
                    }
                }, void 0, false, {
                    fileName: "[project]/components/slide-renderer/Editor/ScreenCanvas.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-0 origin-top-left",
                    style: {
                        width: `${viewportStyles.width}px`,
                        height: `${viewportStyles.height}px`,
                        transform: `scale(${canvasScale})`
                    },
                    children: [
                        elements.map((element, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$ScreenElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScreenElement"], {
                                elementInfo: element,
                                elementIndex: index + 1
                            }, element.id, false, {
                                fileName: "[project]/components/slide-renderer/Editor/ScreenCanvas.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$HighlightOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HighlightOverlay"], {}, void 0, false, {
                            fileName: "[project]/components/slide-renderer/Editor/ScreenCanvas.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/slide-renderer/Editor/ScreenCanvas.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$SpotlightOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpotlightOverlay"], {}, void 0, false, {
                    fileName: "[project]/components/slide-renderer/Editor/ScreenCanvas.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none",
                    style: {
                        padding: '5%'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$35$2e$2_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: laserElementId && laserGeometry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$LaserOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LaserOverlay"], {
                                geometry: laserGeometry,
                                color: laserOptions?.color,
                                duration: laserOptions?.duration
                            }, `laser-${laserElementId}`, false, {
                                fileName: "[project]/components/slide-renderer/Editor/ScreenCanvas.tsx",
                                lineNumber: 110,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/slide-renderer/Editor/ScreenCanvas.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/slide-renderer/Editor/ScreenCanvas.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/slide-renderer/Editor/ScreenCanvas.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/slide-renderer/Editor/ScreenCanvas.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/Editor/ScreenCanvas.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/slide-renderer/Editor/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SlideEditor",
    ()=>SlideEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.2_@babel+core@7.29.0_@opentelemetry+api@1.9.0_@playwright+test@1.58.2_react-d_73d26e8a224c7af85a4dde0601bbbcd7/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/Canvas/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$ScreenCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/slide-renderer/Editor/ScreenCanvas.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function SlideEditor({ mode }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-hidden",
            children: mode === 'autonomous' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$Canvas$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/slide-renderer/Editor/index.tsx",
                lineNumber: 14,
                columnNumber: 34
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$2_$40$babel$2b$core$40$7$2e$29$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$58$2e$2_react$2d$d_73d26e8a224c7af85a4dde0601bbbcd7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$slide$2d$renderer$2f$Editor$2f$ScreenCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScreenCanvas"], {}, void 0, false, {
                fileName: "[project]/components/slide-renderer/Editor/index.tsx",
                lineNumber: 14,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/slide-renderer/Editor/index.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/slide-renderer/Editor/index.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_slide-renderer_9e891b19._.js.map