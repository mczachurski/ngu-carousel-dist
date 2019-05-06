/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class NguCarouselStore {
    /**
     * @param {?=} touch
     * @param {?=} vertical
     * @param {?=} interval
     * @param {?=} transform
     * @param {?=} button
     * @param {?=} visibleItems
     * @param {?=} deviceType
     * @param {?=} type
     * @param {?=} token
     * @param {?=} items
     * @param {?=} load
     * @param {?=} deviceWidth
     * @param {?=} carouselWidth
     * @param {?=} itemWidth
     * @param {?=} slideItems
     * @param {?=} itemWidthPer
     * @param {?=} itemLength
     * @param {?=} currentSlide
     * @param {?=} easing
     * @param {?=} speed
     * @param {?=} loop
     * @param {?=} dexVal
     * @param {?=} touchTransform
     * @param {?=} isEnd
     * @param {?=} isFirst
     * @param {?=} isLast
     * @param {?=} RTL
     * @param {?=} point
     * @param {?=} velocity
     */
    constructor(touch = new Touch(), vertical = new Vertical(), interval, transform = new Transfrom(), button, visibleItems, deviceType, type = 'fixed', token = '', items = 0, load = 0, deviceWidth = 0, carouselWidth = 0, itemWidth = 0, slideItems = 0, itemWidthPer = 0, itemLength = 0, currentSlide = 0, easing = 'cubic-bezier(0, 0, 0.2, 1)', speed = 200, loop = false, dexVal = 0, touchTransform = 0, isEnd = false, isFirst = true, isLast = false, RTL = false, point = true, velocity = 1) {
        this.touch = touch;
        this.vertical = vertical;
        this.interval = interval;
        this.transform = transform;
        this.button = button;
        this.visibleItems = visibleItems;
        this.deviceType = deviceType;
        this.type = type;
        this.token = token;
        this.items = items;
        this.load = load;
        this.deviceWidth = deviceWidth;
        this.carouselWidth = carouselWidth;
        this.itemWidth = itemWidth;
        this.slideItems = slideItems;
        this.itemWidthPer = itemWidthPer;
        this.itemLength = itemLength;
        this.currentSlide = currentSlide;
        this.easing = easing;
        this.speed = speed;
        this.loop = loop;
        this.dexVal = dexVal;
        this.touchTransform = touchTransform;
        this.isEnd = isEnd;
        this.isFirst = isFirst;
        this.isLast = isLast;
        this.RTL = RTL;
        this.point = point;
        this.velocity = velocity;
    }
}
if (false) {
    /** @type {?} */
    NguCarouselStore.prototype.touch;
    /** @type {?} */
    NguCarouselStore.prototype.vertical;
    /** @type {?} */
    NguCarouselStore.prototype.interval;
    /** @type {?} */
    NguCarouselStore.prototype.transform;
    /** @type {?} */
    NguCarouselStore.prototype.button;
    /** @type {?} */
    NguCarouselStore.prototype.visibleItems;
    /** @type {?} */
    NguCarouselStore.prototype.deviceType;
    /** @type {?} */
    NguCarouselStore.prototype.type;
    /** @type {?} */
    NguCarouselStore.prototype.token;
    /** @type {?} */
    NguCarouselStore.prototype.items;
    /** @type {?} */
    NguCarouselStore.prototype.load;
    /** @type {?} */
    NguCarouselStore.prototype.deviceWidth;
    /** @type {?} */
    NguCarouselStore.prototype.carouselWidth;
    /** @type {?} */
    NguCarouselStore.prototype.itemWidth;
    /** @type {?} */
    NguCarouselStore.prototype.slideItems;
    /** @type {?} */
    NguCarouselStore.prototype.itemWidthPer;
    /** @type {?} */
    NguCarouselStore.prototype.itemLength;
    /** @type {?} */
    NguCarouselStore.prototype.currentSlide;
    /** @type {?} */
    NguCarouselStore.prototype.easing;
    /** @type {?} */
    NguCarouselStore.prototype.speed;
    /** @type {?} */
    NguCarouselStore.prototype.loop;
    /** @type {?} */
    NguCarouselStore.prototype.dexVal;
    /** @type {?} */
    NguCarouselStore.prototype.touchTransform;
    /** @type {?} */
    NguCarouselStore.prototype.isEnd;
    /** @type {?} */
    NguCarouselStore.prototype.isFirst;
    /** @type {?} */
    NguCarouselStore.prototype.isLast;
    /** @type {?} */
    NguCarouselStore.prototype.RTL;
    /** @type {?} */
    NguCarouselStore.prototype.point;
    /** @type {?} */
    NguCarouselStore.prototype.velocity;
}
export class ItemsControl {
}
if (false) {
    /** @type {?} */
    ItemsControl.prototype.start;
    /** @type {?} */
    ItemsControl.prototype.end;
}
export class Vertical {
}
if (false) {
    /** @type {?} */
    Vertical.prototype.enabled;
    /** @type {?} */
    Vertical.prototype.height;
}
export class NguButton {
}
if (false) {
    /** @type {?} */
    NguButton.prototype.visibility;
    /** @type {?} */
    NguButton.prototype.elastic;
}
export class Touch {
}
if (false) {
    /** @type {?} */
    Touch.prototype.active;
    /** @type {?} */
    Touch.prototype.swipe;
    /** @type {?} */
    Touch.prototype.velocity;
}
export class Transfrom {
    /**
     * @param {?=} xs
     * @param {?=} sm
     * @param {?=} md
     * @param {?=} lg
     * @param {?=} all
     */
    constructor(xs = 0, sm = 0, md = 0, lg = 0, all = 0) {
        this.xs = xs;
        this.sm = sm;
        this.md = md;
        this.lg = lg;
        this.all = all;
    }
}
if (false) {
    /** @type {?} */
    Transfrom.prototype.xs;
    /** @type {?} */
    Transfrom.prototype.sm;
    /** @type {?} */
    Transfrom.prototype.md;
    /** @type {?} */
    Transfrom.prototype.lg;
    /** @type {?} */
    Transfrom.prototype.all;
}
export class NguCarouselConfig {
}
if (false) {
    /** @type {?} */
    NguCarouselConfig.prototype.grid;
    /** @type {?} */
    NguCarouselConfig.prototype.slide;
    /** @type {?} */
    NguCarouselConfig.prototype.speed;
    /** @type {?} */
    NguCarouselConfig.prototype.interval;
    /** @type {?} */
    NguCarouselConfig.prototype.animation;
    /** @type {?} */
    NguCarouselConfig.prototype.point;
    /** @type {?} */
    NguCarouselConfig.prototype.type;
    /** @type {?} */
    NguCarouselConfig.prototype.load;
    /** @type {?} */
    NguCarouselConfig.prototype.custom;
    /** @type {?} */
    NguCarouselConfig.prototype.loop;
    /** @type {?} */
    NguCarouselConfig.prototype.touch;
    /** @type {?} */
    NguCarouselConfig.prototype.easing;
    /** @type {?} */
    NguCarouselConfig.prototype.RTL;
    /** @type {?} */
    NguCarouselConfig.prototype.button;
    /** @type {?} */
    NguCarouselConfig.prototype.vertical;
    /** @type {?} */
    NguCarouselConfig.prototype.velocity;
}
/**
 * @record
 */
export function Point() { }
if (false) {
    /** @type {?} */
    Point.prototype.visible;
    /** @type {?|undefined} */
    Point.prototype.hideOnSingleSlide;
}
/**
 * @record
 */
export function Animation() { }
if (false) {
    /** @type {?|undefined} */
    Animation.prototype.type;
    /** @type {?|undefined} */
    Animation.prototype.animateStyles;
}
/**
 * @record
 */
export function AnimationStyles() { }
if (false) {
    /** @type {?|undefined} */
    AnimationStyles.prototype.style;
    /** @type {?|undefined} */
    AnimationStyles.prototype.open;
    /** @type {?|undefined} */
    AnimationStyles.prototype.close;
    /** @type {?|undefined} */
    AnimationStyles.prototype.stagger;
}
/**
 * @record
 */
export function CarouselInterval() { }
if (false) {
    /** @type {?} */
    CarouselInterval.prototype.timing;
    /** @type {?|undefined} */
    CarouselInterval.prototype.initialDelay;
}
/**
 * @template T
 */
export class NguCarouselOutletContext {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.$implicit = data;
    }
}
if (false) {
    /**
     * Data for the node.
     * @type {?}
     */
    NguCarouselOutletContext.prototype.$implicit;
    /**
     * Depth of the node.
     * @type {?}
     */
    NguCarouselOutletContext.prototype.level;
    /**
     * Index location of the node.
     * @type {?}
     */
    NguCarouselOutletContext.prototype.index;
    /**
     * Length of the number of total dataNodes.
     * @type {?}
     */
    NguCarouselOutletContext.prototype.count;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1LWNhcm91c2VsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5ndS9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbImxpYi9uZ3UtY2Fyb3VzZWwvbmd1LWNhcm91c2VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNKLFlBQ1MsUUFBUSxJQUFJLEtBQUssRUFBRSxFQUNuQixXQUFXLElBQUksUUFBUSxFQUFFLEVBQ3pCLFFBQTJCLEVBQzNCLFlBQVksSUFBSSxTQUFTLEVBQUUsRUFDM0IsTUFBa0IsRUFDbEIsWUFBMkIsRUFDM0IsVUFBdUIsRUFDdkIsT0FBTyxPQUFPLEVBQ2QsUUFBUSxFQUFFLEVBQ1YsUUFBUSxDQUFDLEVBQ1QsT0FBTyxDQUFDLEVBQ1IsY0FBYyxDQUFDLEVBQ2YsZ0JBQWdCLENBQUMsRUFDakIsWUFBWSxDQUFDLEVBQ2IsYUFBYSxDQUFDLEVBQ2QsZUFBZSxDQUFDLEVBQ2hCLGFBQWEsQ0FBQyxFQUNkLGVBQWUsQ0FBQyxFQUNoQixTQUFTLDRCQUE0QixFQUNyQyxRQUFRLEdBQUcsRUFDWCxPQUFPLEtBQUssRUFDWixTQUFTLENBQUMsRUFDVixpQkFBaUIsQ0FBQyxFQUNsQixRQUFRLEtBQUssRUFDYixVQUFVLElBQUksRUFDZCxTQUFTLEtBQUssRUFDZCxNQUFNLEtBQUssRUFDWCxRQUFRLElBQUksRUFDWixXQUFXLENBQUM7UUE1QlosVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixhQUFRLEdBQVIsUUFBUSxDQUFtQjtRQUMzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLGlCQUFZLEdBQVosWUFBWSxDQUFlO1FBQzNCLGVBQVUsR0FBVixVQUFVLENBQWE7UUFDdkIsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQUs7UUFD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O0FBR25CLHNDQUdDOzs7SUFGQyxrQ0FBZTs7SUFDZix3Q0FBc0I7Ozs7O0FBR3hCLE1BQU07Ozs7SUFhSixZQUFZLElBQU87UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztDQUNGOzs7Ozs7SUFkQyw2Q0FBYTs7Ozs7SUFHYix5Q0FBYzs7Ozs7SUFHZCx5Q0FBZTs7Ozs7SUFHZix5Q0FBZSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbFN0b3JlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRvdWNoID0gbmV3IFRvdWNoKCksXG4gICAgcHVibGljIHZlcnRpY2FsID0gbmV3IFZlcnRpY2FsKCksXG4gICAgcHVibGljIGludGVydmFsPzogQ2Fyb3VzZWxJbnRlcnZhbCxcbiAgICBwdWJsaWMgdHJhbnNmb3JtID0gbmV3IFRyYW5zZnJvbSgpLFxuICAgIHB1YmxpYyBidXR0b24/OiBOZ3VCdXR0b24sXG4gICAgcHVibGljIHZpc2libGVJdGVtcz86IEl0ZW1zQ29udHJvbCxcbiAgICBwdWJsaWMgZGV2aWNlVHlwZT86IERldmljZVR5cGUsXG4gICAgcHVibGljIHR5cGUgPSAnZml4ZWQnLFxuICAgIHB1YmxpYyB0b2tlbiA9ICcnLFxuICAgIHB1YmxpYyBpdGVtcyA9IDAsXG4gICAgcHVibGljIGxvYWQgPSAwLFxuICAgIHB1YmxpYyBkZXZpY2VXaWR0aCA9IDAsXG4gICAgcHVibGljIGNhcm91c2VsV2lkdGggPSAwLFxuICAgIHB1YmxpYyBpdGVtV2lkdGggPSAwLFxuICAgIHB1YmxpYyBzbGlkZUl0ZW1zID0gMCxcbiAgICBwdWJsaWMgaXRlbVdpZHRoUGVyID0gMCxcbiAgICBwdWJsaWMgaXRlbUxlbmd0aCA9IDAsXG4gICAgcHVibGljIGN1cnJlbnRTbGlkZSA9IDAsXG4gICAgcHVibGljIGVhc2luZyA9ICdjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKScsXG4gICAgcHVibGljIHNwZWVkID0gMjAwLFxuICAgIHB1YmxpYyBsb29wID0gZmFsc2UsXG4gICAgcHVibGljIGRleFZhbCA9IDAsXG4gICAgcHVibGljIHRvdWNoVHJhbnNmb3JtID0gMCxcbiAgICBwdWJsaWMgaXNFbmQgPSBmYWxzZSxcbiAgICBwdWJsaWMgaXNGaXJzdCA9IHRydWUsXG4gICAgcHVibGljIGlzTGFzdCA9IGZhbHNlLFxuICAgIHB1YmxpYyBSVEwgPSBmYWxzZSxcbiAgICBwdWJsaWMgcG9pbnQgPSB0cnVlLFxuICAgIHB1YmxpYyB2ZWxvY2l0eSA9IDFcbiAgKSB7fVxufVxuZXhwb3J0IHR5cGUgRGV2aWNlVHlwZSA9ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAnYWxsJztcblxuZXhwb3J0IHR5cGUgQnV0dG9uVmlzaWJsZSA9ICdkaXNhYmxlZCcgfCAnaGlkZSc7XG5cbmV4cG9ydCBjbGFzcyBJdGVtc0NvbnRyb2wge1xuICBzdGFydDogbnVtYmVyO1xuICBlbmQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsIHtcbiAgZW5hYmxlZDogYm9vbGVhbjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8vIG51bUhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE5ndUJ1dHRvbiB7XG4gIHZpc2liaWxpdHk/OiBCdXR0b25WaXNpYmxlO1xuICBlbGFzdGljPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgVG91Y2gge1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBzd2lwZTogc3RyaW5nO1xuICB2ZWxvY2l0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgVHJhbnNmcm9tIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHhzID0gMCxcbiAgICBwdWJsaWMgc20gPSAwLFxuICAgIHB1YmxpYyBtZCA9IDAsXG4gICAgcHVibGljIGxnID0gMCxcbiAgICBwdWJsaWMgYWxsID0gMFxuICApIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbENvbmZpZyB7XG4gIGdyaWQ6IFRyYW5zZnJvbTtcbiAgc2xpZGU/OiBudW1iZXI7XG4gIHNwZWVkPzogbnVtYmVyO1xuICBpbnRlcnZhbD86IENhcm91c2VsSW50ZXJ2YWw7XG4gIGFuaW1hdGlvbj86IEFuaW1hdGU7XG4gIHBvaW50PzogUG9pbnQ7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIGxvYWQ/OiBudW1iZXI7XG4gIGN1c3RvbT86IEN1c3RvbTtcbiAgbG9vcD86IGJvb2xlYW47XG4gIHRvdWNoPzogYm9vbGVhbjtcbiAgZWFzaW5nPzogc3RyaW5nO1xuICBSVEw/OiBib29sZWFuO1xuICBidXR0b24/OiBOZ3VCdXR0b247XG4gIHZlcnRpY2FsPzogVmVydGljYWw7XG4gIHZlbG9jaXR5PzogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBDdXN0b20gPSAnYmFubmVyJztcbmV4cG9ydCB0eXBlIEFuaW1hdGUgPSAnbGF6eSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xuICB2aXNpYmxlOiBib29sZWFuO1xuICBoaWRlT25TaW5nbGVTbGlkZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5pbWF0aW9uIHtcbiAgdHlwZT86IEFuaW1hdGU7XG4gIGFuaW1hdGVTdHlsZXM/OiBBbmltYXRpb25TdHlsZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5pbWF0aW9uU3R5bGVzIHtcbiAgc3R5bGU/OiBzdHJpbmc7XG4gIG9wZW4/OiBzdHJpbmc7XG4gIGNsb3NlPzogc3RyaW5nO1xuICBzdGFnZ2VyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcm91c2VsSW50ZXJ2YWwge1xuICB0aW1pbmc6IG51bWJlcjtcbiAgaW5pdGlhbERlbGF5PzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxPdXRsZXRDb250ZXh0PFQ+IHtcbiAgLyoqIERhdGEgZm9yIHRoZSBub2RlLiAqL1xuICAkaW1wbGljaXQ6IFQ7XG5cbiAgLyoqIERlcHRoIG9mIHRoZSBub2RlLiAqL1xuICBsZXZlbDogbnVtYmVyO1xuXG4gIC8qKiBJbmRleCBsb2NhdGlvbiBvZiB0aGUgbm9kZS4gKi9cbiAgaW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqIExlbmd0aCBvZiB0aGUgbnVtYmVyIG9mIHRvdGFsIGRhdGFOb2Rlcy4gKi9cbiAgY291bnQ/OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogVCkge1xuICAgIHRoaXMuJGltcGxpY2l0ID0gZGF0YTtcbiAgfVxufVxuIl19