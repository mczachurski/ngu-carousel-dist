import { Directive, TemplateRef, ViewContainerRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Inject, Input, isDevMode, IterableDiffers, Output, PLATFORM_ID, Renderer2, ViewChild, HostBinding, NgModule } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { empty, fromEvent, interval, merge, Observable, of, Subject } from 'rxjs';
import { mapTo, startWith, switchMap, takeUntil } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NguCarouselStore {
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
    constructor(touch = new Touch(), vertical = new Vertical(), interval$$1, transform = new Transfrom(), button, visibleItems, deviceType, type = 'fixed', token = '', items = 0, load = 0, deviceWidth = 0, carouselWidth = 0, itemWidth = 0, slideItems = 0, itemWidthPer = 0, itemLength = 0, currentSlide = 0, easing = 'cubic-bezier(0, 0, 0.2, 1)', speed = 200, loop = false, dexVal = 0, touchTransform = 0, isEnd = false, isFirst = true, isLast = false, RTL = false, point = true, velocity = 1) {
        this.touch = touch;
        this.vertical = vertical;
        this.interval = interval$$1;
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
class ItemsControl {
}
class Vertical {
}
class NguButton {
}
class Touch {
}
class Transfrom {
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
class NguCarouselConfig {
}
/**
 * @template T
 */
class NguCarouselOutletContext {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.$implicit = data;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NguCarouselItemDirective {
}
NguCarouselItemDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselItem]'
            },] },
];
class NguCarouselNextDirective {
}
NguCarouselNextDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselNext]'
            },] },
];
class NguCarouselPrevDirective {
}
NguCarouselPrevDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselPrev]'
            },] },
];
class NguCarouselPointDirective {
}
NguCarouselPointDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselPoint]'
            },] },
];
/**
 * @template T
 */
class NguCarouselDefDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NguCarouselDefDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[nguCarouselDef]'
            },] },
];
NguCarouselDefDirective.ctorParameters = () => [
    { type: TemplateRef }
];
// tslint:disable-next-line:directive-class-suffix
class NguCarouselOutlet {
    /**
     * @param {?} viewContainer
     */
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
}
NguCarouselOutlet.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[nguCarouselOutlet]'
            },] },
];
NguCarouselOutlet.ctorParameters = () => [
    { type: ViewContainerRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
// tslint:disable-next-line:component-class-suffix
class NguCarousel extends NguCarouselStore {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _differs
     * @param {?} platformId
     * @param {?} cdr
     */
    constructor(_el, _renderer, _differs, platformId, cdr) {
        super();
        this._el = _el;
        this._renderer = _renderer;
        this._differs = _differs;
        this.platformId = platformId;
        this.cdr = cdr;
        this.withAnim = true;
        this.isHovered = false;
        this.carouselLoad = new EventEmitter();
        // tslint:disable-next-line:no-output-on-prefix
        this.onMove = new EventEmitter();
        this._intervalController$ = new Subject();
        this.pointNumbers = [];
    }
    /**
     * @return {?}
     */
    get dataSource() {
        return this._dataSource;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set dataSource(data) {
        if (data) {
            // console.log(data, this.dataSource);
            // this.isFirstss++;
            this._switchDataSource(data);
        }
    }
    /**
     * The setter is used to catch the button if the button has ngIf
     * issue id #91
     * @param {?} btn
     * @return {?}
     */
    set nextBtn(btn) {
        this.listener2 && this.listener2();
        if (btn) {
            this.listener2 = this._renderer.listen(btn.nativeElement, 'click', (/**
             * @return {?}
             */
            () => this._carouselScrollOne(1)));
        }
    }
    /**
     * The setter is used to catch the button if the button has ngIf
     * issue id #91
     * @param {?} btn
     * @return {?}
     */
    set prevBtn(btn) {
        this.listener1 && this.listener1();
        if (btn) {
            this.listener1 = this._renderer.listen(btn.nativeElement, 'click', (/**
             * @return {?}
             */
            () => this._carouselScrollOne(0)));
        }
    }
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize Items operations by identifying a Items based on its data
     * relative to the function to know if a Items should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     * @return {?}
     */
    get trackBy() {
        return this._trackByFn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    set trackBy(fn) {
        if (isDevMode() &&
            fn != null &&
            typeof fn !== 'function' &&
            (/** @type {?} */ (console)) &&
            (/** @type {?} */ (console.warn))) {
            console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
        }
        this._trackByFn = fn;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._dataDiffer = this._differs
            .find([])
            .create((/**
         * @param {?} _i
         * @param {?} item
         * @return {?}
         */
        (_i, item) => {
            return this.trackBy ? this.trackBy(item.dataIndex, item.data) : item;
        }));
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        this.arrayChanges = this._dataDiffer.diff(this.dataSource);
        if (this.arrayChanges && this._defDirec) {
            // console.log('Changes detected!');
            this._observeRenderChanges();
        }
    }
    /**
     * @private
     * @param {?} dataSource
     * @return {?}
     */
    _switchDataSource(dataSource) {
        this._dataSource = dataSource;
        if (this._defDirec) {
            this._observeRenderChanges();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _observeRenderChanges() {
        /** @type {?} */
        let dataStream;
        if (this._dataSource instanceof Observable) {
            dataStream = this._dataSource;
        }
        else if (Array.isArray(this._dataSource)) {
            dataStream = of(this._dataSource);
        }
        if (dataStream) {
            this._dataSubscription = dataStream
                .pipe(takeUntil(this._intervalController$))
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                this.renderNodeChanges(data);
                this.isLast = false;
            }));
        }
    }
    /**
     * @private
     * @param {?} data
     * @param {?=} viewContainer
     * @return {?}
     */
    renderNodeChanges(data, viewContainer = this._nodeOutlet.viewContainer) {
        if (!this.arrayChanges)
            return;
        this.arrayChanges.forEachOperation((/**
         * @param {?} item
         * @param {?} adjustedPreviousIndex
         * @param {?} currentIndex
         * @return {?}
         */
        (item, adjustedPreviousIndex, currentIndex) => {
            // const node = this._defDirec.find(items => item.item);
            /** @type {?} */
            const node = this._getNodeDef(data[currentIndex], currentIndex);
            if (item.previousIndex == null) {
                /** @type {?} */
                const context = new NguCarouselOutletContext(data[currentIndex]);
                context.index = currentIndex;
                viewContainer.createEmbeddedView(node.template, context, currentIndex);
            }
            else if (currentIndex == null) {
                viewContainer.remove(adjustedPreviousIndex);
            }
            else {
                /** @type {?} */
                const view = viewContainer.get(adjustedPreviousIndex);
                viewContainer.move(view, currentIndex);
            }
        }));
        this._updateItemIndexContext();
        if (this.carousel) {
            this._storeCarouselData();
        }
        // console.log(this.dataSource);
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     * @private
     * @return {?}
     */
    _updateItemIndexContext() {
        /** @type {?} */
        const viewContainer = this._nodeOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            const viewRef = (/** @type {?} */ (viewContainer.get(renderIndex)));
            /** @type {?} */
            const context = (/** @type {?} */ (viewRef.context));
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            context.index = renderIndex;
        }
    }
    /**
     * @private
     * @param {?} data
     * @param {?} i
     * @return {?}
     */
    _getNodeDef(data, i) {
        // console.log(this._defDirec);
        if (this._defDirec.length === 1) {
            return this._defDirec.first;
        }
        /** @type {?} */
        const nodeDef = this._defDirec.find((/**
         * @param {?} def
         * @return {?}
         */
        def => def.when && def.when(i, data))) ||
            this._defaultNodeDef;
        return nodeDef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.carousel = this._el.nativeElement;
        this._inputValidation();
        this.carouselCssNode = this._createStyleElem();
        // this._buttonControl();
        if (isPlatformBrowser(this.platformId)) {
            this._carouselInterval();
            if (!this.vertical.enabled) {
                this._touch();
            }
            this.listener3 = this._renderer.listen('window', 'resize', (/**
             * @param {?} event
             * @return {?}
             */
            event => {
                this._onResizing(event);
            }));
            this._onWindowScrolling();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._observeRenderChanges();
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    _inputValidation() {
        this.type = this.inputs.grid.all !== 0 ? 'fixed' : 'responsive';
        this.loop = this.inputs.loop || false;
        this.inputs.easing = this.inputs.easing || 'cubic-bezier(0, 0, 0.2, 1)';
        this.touch.active = this.inputs.touch || false;
        this.RTL = this.inputs.RTL ? true : false;
        this.interval = this.inputs.interval || null;
        this.velocity =
            typeof this.inputs.velocity === 'number'
                ? this.inputs.velocity
                : this.velocity;
        if (this.inputs.vertical && this.inputs.vertical.enabled) {
            this.vertical.enabled = this.inputs.vertical.enabled;
            this.vertical.height = this.inputs.vertical.height;
        }
        this.directionSym = this.RTL ? '' : '-';
        this.point =
            this.inputs.point && typeof this.inputs.point.visible !== 'undefined'
                ? this.inputs.point.visible
                : true;
        this._carouselSize();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // clearInterval(this.carouselInt);
        this.carouselInt && this.carouselInt.unsubscribe();
        this._intervalController$.unsubscribe();
        this.carouselLoad.complete();
        this.onMove.complete();
        /** remove listeners */
        clearTimeout(this.onScrolling);
        for (let i = 1; i <= 4; i++) {
            /** @type {?} */
            const str = `listener${i}`;
            this[str] && this[str]();
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    _onResizing(event) {
        clearTimeout(this.onResize);
        this.onResize = setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.deviceWidth !== event.target.outerWidth) {
                this._setStyle(this.nguItemsContainer.nativeElement, 'transition', ``);
                this._storeCarouselData();
            }
        }), 500);
    }
    /**
     * Get Touch input
     * @private
     * @return {?}
     */
    _touch() {
        if (this.inputs.touch) {
            /** @type {?} */
            const hammertime = new Hammer(this.touchContainer.nativeElement);
            hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
            hammertime.on('panstart', (/**
             * @param {?} ev
             * @return {?}
             */
            (ev) => {
                this.carouselWidth = this.nguItemsContainer.nativeElement.offsetWidth;
                this.touchTransform = this.transform[this.deviceType];
                this.dexVal = 0;
                this._setStyle(this.nguItemsContainer.nativeElement, 'transition', '');
            }));
            if (this.vertical.enabled) {
                hammertime.on('panup', (/**
                 * @param {?} ev
                 * @return {?}
                 */
                (ev) => {
                    this._touchHandling('panleft', ev);
                }));
                hammertime.on('pandown', (/**
                 * @param {?} ev
                 * @return {?}
                 */
                (ev) => {
                    this._touchHandling('panright', ev);
                }));
            }
            else {
                hammertime.on('panleft', (/**
                 * @param {?} ev
                 * @return {?}
                 */
                (ev) => {
                    this._touchHandling('panleft', ev);
                }));
                hammertime.on('panright', (/**
                 * @param {?} ev
                 * @return {?}
                 */
                (ev) => {
                    this._touchHandling('panright', ev);
                }));
            }
            hammertime.on('panend', (/**
             * @param {?} ev
             * @return {?}
             */
            (ev) => {
                if (Math.abs(ev.velocity) >= this.velocity) {
                    this.touch.velocity = ev.velocity;
                    /** @type {?} */
                    let direc = 0;
                    if (!this.RTL) {
                        direc = this.touch.swipe === 'panright' ? 0 : 1;
                    }
                    else {
                        direc = this.touch.swipe === 'panright' ? 1 : 0;
                    }
                    this._carouselScrollOne(direc);
                }
                else {
                    this.dexVal = 0;
                    this._setStyle(this.nguItemsContainer.nativeElement, 'transition', 'transform 324ms cubic-bezier(0, 0, 0.2, 1)');
                    this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
                }
            }));
            hammertime.on('hammer.input', (/**
             * @param {?} ev
             * @return {?}
             */
            function (ev) {
                // allow nested touch events to no propagate, this may have other side affects but works for now.
                // TODO: It is probably better to check the source element of the event and only apply the handle to the correct carousel
                ev.srcEvent.stopPropagation();
            }));
        }
    }
    /**
     * handle touch input
     * @private
     * @param {?} e
     * @param {?} ev
     * @return {?}
     */
    _touchHandling(e, ev) {
        // vertical touch events seem to cause to panstart event with an odd delta
        // and a center of {x:0,y:0} so this will ignore them
        if (ev.center.x === 0) {
            return;
        }
        ev = Math.abs(this.vertical.enabled ? ev.deltaY : ev.deltaX);
        /** @type {?} */
        let valt = ev - this.dexVal;
        valt =
            this.type === 'responsive'
                ? (Math.abs(ev - this.dexVal) /
                    (this.vertical.enabled
                        ? this.vertical.height
                        : this.carouselWidth)) *
                    100
                : valt;
        this.dexVal = ev;
        this.touch.swipe = e;
        this._setTouchTransfrom(e, valt);
        this._setTransformFromTouch();
    }
    /**
     * @private
     * @param {?} e
     * @param {?} valt
     * @return {?}
     */
    _setTouchTransfrom(e, valt) {
        /** @type {?} */
        const condition = this.RTL ? 'panright' : 'panleft';
        this.touchTransform =
            e === condition ? valt + this.touchTransform : this.touchTransform - valt;
    }
    /**
     * @private
     * @return {?}
     */
    _setTransformFromTouch() {
        if (this.touchTransform < 0) {
            this.touchTransform = 0;
        }
        /** @type {?} */
        const type = this.type === 'responsive' ? '%' : 'px';
        this._setStyle(this.nguItemsContainer.nativeElement, 'transform', this.vertical.enabled
            ? `translate3d(0, ${this.directionSym}${this.touchTransform}${type}, 0)`
            : `translate3d(${this.directionSym}${this.touchTransform}${type}, 0, 0)`);
    }
    /**
     * this fn used to disable the interval when it is not on the viewport
     * @private
     * @return {?}
     */
    _onWindowScrolling() {
        /** @type {?} */
        const top = this.carousel.offsetTop;
        /** @type {?} */
        const scrollY = window.scrollY;
        /** @type {?} */
        const heightt = window.innerHeight;
        /** @type {?} */
        const carouselHeight = this.carousel.offsetHeight;
        /** @type {?} */
        const isCarouselOnScreen = top <= scrollY + heightt - carouselHeight / 4 &&
            top + carouselHeight / 2 >= scrollY;
        if (isCarouselOnScreen) {
            this._intervalController$.next(1);
        }
        else {
            this._intervalController$.next(0);
        }
    }
    /**
     * store data based on width of the screen for the carousel
     * @private
     * @return {?}
     */
    _storeCarouselData() {
        this.deviceWidth = isPlatformBrowser(this.platformId)
            ? window.innerWidth
            : 1200;
        this.carouselWidth = this.carouselMain1.nativeElement.offsetWidth;
        if (this.type === 'responsive') {
            this.deviceType =
                this.deviceWidth >= 1200
                    ? 'lg'
                    : this.deviceWidth >= 992
                        ? 'md'
                        : this.deviceWidth >= 768
                            ? 'sm'
                            : 'xs';
            this.items = this.inputs.grid[this.deviceType];
            this.itemWidth = this.carouselWidth / this.items;
        }
        else {
            this.items = Math.trunc(this.carouselWidth / this.inputs.grid.all);
            this.itemWidth = this.inputs.grid.all;
            this.deviceType = 'all';
        }
        this.slideItems = +(this.inputs.slide < this.items
            ? this.inputs.slide
            : this.items);
        this.load =
            this.inputs.load >= this.slideItems ? this.inputs.load : this.slideItems;
        this.speed =
            this.inputs.speed && this.inputs.speed > -1 ? this.inputs.speed : 400;
        this._carouselPoint();
    }
    /**
     * Used to reset the carousel
     * @param {?=} withOutAnimation
     * @return {?}
     */
    reset(withOutAnimation) {
        withOutAnimation && (this.withAnim = false);
        this.carouselCssNode.innerHTML = '';
        this.moveTo(0);
        this._carouselPoint();
    }
    /**
     * Init carousel point
     * @private
     * @return {?}
     */
    _carouselPoint() {
        // debugger;
        // if (this.userData.point.visible === true) {
        /** @type {?} */
        const Nos = this.dataSource.length - (this.items - this.slideItems);
        this.pointIndex = Math.ceil(Nos / this.slideItems);
        /** @type {?} */
        const pointers = [];
        if (this.pointIndex > 1 || !this.inputs.point.hideOnSingleSlide) {
            for (let i = 0; i < this.pointIndex; i++) {
                pointers.push(i);
            }
        }
        this.pointNumbers = pointers;
        // console.log(this.pointNumbers);
        this._carouselPointActiver();
        if (this.pointIndex <= 1) {
            this._btnBoolean(1, 1);
        }
        else {
            if (this.currentSlide === 0 && !this.loop) {
                this._btnBoolean(1, 0);
            }
            else {
                this._btnBoolean(0, 0);
            }
        }
        // }
    }
    /**
     * change the active point in carousel
     * @private
     * @return {?}
     */
    _carouselPointActiver() {
        /** @type {?} */
        const i = Math.ceil(this.currentSlide / this.slideItems);
        this.activePoint = i;
        // console.log(this.data);
        this.cdr.markForCheck();
    }
    /**
     * this function is used to scoll the carousel when point is clicked
     * @param {?} slide
     * @param {?=} withOutAnimation
     * @return {?}
     */
    moveTo(slide, withOutAnimation) {
        // slide = slide - 1;
        withOutAnimation && (this.withAnim = false);
        if (this.activePoint !== slide && slide < this.pointIndex) {
            /** @type {?} */
            let slideremains;
            /** @type {?} */
            const btns = this.currentSlide < slide ? 1 : 0;
            switch (slide) {
                case 0:
                    this._btnBoolean(1, 0);
                    slideremains = slide * this.slideItems;
                    break;
                case this.pointIndex - 1:
                    this._btnBoolean(0, 1);
                    slideremains = this.dataSource.length - this.items;
                    break;
                default:
                    this._btnBoolean(0, 0);
                    slideremains = slide * this.slideItems;
            }
            this._carouselScrollTwo(btns, slideremains, this.speed);
        }
    }
    /**
     * set the style of the carousel based the inputs data
     * @private
     * @return {?}
     */
    _carouselSize() {
        this.token = this._generateID();
        /** @type {?} */
        let dism = '';
        this.styleid = `.${this.token} > .ngucarousel > .ngu-touch-container > .ngucarousel-items`;
        if (this.inputs.custom === 'banner') {
            this._renderer.addClass(this.carousel, 'banner');
        }
        if (this.inputs.animation === 'lazy') {
            dism += `${this.styleid} > .item {transition: transform .6s ease;}`;
        }
        /** @type {?} */
        let itemStyle = '';
        if (this.vertical.enabled) {
            /** @type {?} */
            const itemWidth_xs = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.xs}px}`;
            /** @type {?} */
            const itemWidth_sm = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.sm}px}`;
            /** @type {?} */
            const itemWidth_md = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.md}px}`;
            /** @type {?} */
            const itemWidth_lg = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.lg}px}`;
            itemStyle = `@media (max-width:767px){${itemWidth_xs}}
                    @media (min-width:768px){${itemWidth_sm}}
                    @media (min-width:992px){${itemWidth_md}}
                    @media (min-width:1200px){${itemWidth_lg}}`;
        }
        else if (this.type === 'responsive') {
            /** @type {?} */
            const itemWidth_xs = this.inputs.type === 'mobile'
                ? `${this.styleid} .item {flex: 0 0 ${95 /
                    +this.inputs.grid.xs}%; width: ${95 / +this.inputs.grid.xs}%;}`
                : `${this.styleid} .item {flex: 0 0 ${100 /
                    +this.inputs.grid.xs}%; width: ${100 / +this.inputs.grid.xs}%;}`;
            /** @type {?} */
            const itemWidth_sm = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.sm}%; width: ${100 / +this.inputs.grid.sm}%}`;
            /** @type {?} */
            const itemWidth_md = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.md}%; width: ${100 / +this.inputs.grid.md}%}`;
            /** @type {?} */
            const itemWidth_lg = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.lg}%; width: ${100 / +this.inputs.grid.lg}%}`;
            itemStyle = `@media (max-width:767px){${itemWidth_xs}}
                    @media (min-width:768px){${itemWidth_sm}}
                    @media (min-width:992px){${itemWidth_md}}
                    @media (min-width:1200px){${itemWidth_lg}}`;
        }
        else {
            itemStyle = `${this.styleid} .item {flex: 0 0 ${this.inputs.grid.all}px; width: ${this.inputs.grid.all}px;}`;
        }
        this._renderer.addClass(this.carousel, this.token);
        if (this.vertical.enabled) {
            this._renderer.addClass(this.nguItemsContainer.nativeElement, 'nguvertical');
            this._renderer.setStyle(this.carouselMain1.nativeElement, 'height', `${this.vertical.height}px`);
        }
        // tslint:disable-next-line:no-unused-expression
        this.RTL &&
            !this.vertical.enabled &&
            this._renderer.addClass(this.carousel, 'ngurtl');
        this._createStyleElem(`${dism} ${itemStyle}`);
        this._storeCarouselData();
    }
    /**
     * logic to scroll the carousel step 1
     * @private
     * @param {?} Btn
     * @return {?}
     */
    _carouselScrollOne(Btn) {
        /** @type {?} */
        let itemSpeed = this.speed;
        /** @type {?} */
        let translateXval;
        /** @type {?} */
        let currentSlide = 0;
        /** @type {?} */
        const touchMove = Math.ceil(this.dexVal / this.itemWidth);
        this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
        if (this.pointIndex === 1) {
            return;
        }
        else if (Btn === 0 && ((!this.loop && !this.isFirst) || this.loop)) {
            /** @type {?} */
            const slide = this.slideItems * this.pointIndex;
            /** @type {?} */
            const currentSlideD = this.currentSlide - this.slideItems;
            /** @type {?} */
            const MoveSlide = currentSlideD + this.slideItems;
            this._btnBoolean(0, 1);
            if (this.currentSlide === 0) {
                currentSlide = this.dataSource.length - this.items;
                itemSpeed = 400;
                this._btnBoolean(0, 1);
            }
            else if (this.slideItems >= MoveSlide) {
                currentSlide = translateXval = 0;
                this._btnBoolean(1, 0);
            }
            else {
                this._btnBoolean(0, 0);
                if (touchMove > this.slideItems) {
                    currentSlide = this.currentSlide - touchMove;
                    itemSpeed = 200;
                }
                else {
                    currentSlide = this.currentSlide - this.slideItems;
                }
            }
            this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
        }
        else if (Btn === 1 && ((!this.loop && !this.isLast) || this.loop)) {
            if (this.dataSource.length <=
                this.currentSlide + this.items + this.slideItems &&
                !this.isLast) {
                currentSlide = this.dataSource.length - this.items;
                this._btnBoolean(0, 1);
            }
            else if (this.isLast) {
                currentSlide = translateXval = 0;
                itemSpeed = 400;
                this._btnBoolean(1, 0);
            }
            else {
                this._btnBoolean(0, 0);
                if (touchMove > this.slideItems) {
                    currentSlide =
                        this.currentSlide + this.slideItems + (touchMove - this.slideItems);
                    itemSpeed = 200;
                }
                else {
                    currentSlide = this.currentSlide + this.slideItems;
                }
            }
            this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
        }
        // cubic-bezier(0.15, 1.04, 0.54, 1.13)
    }
    /**
     * logic to scroll the carousel step 2
     * @private
     * @param {?} Btn
     * @param {?} currentSlide
     * @param {?} itemSpeed
     * @return {?}
     */
    _carouselScrollTwo(Btn, currentSlide, itemSpeed) {
        // tslint:disable-next-line:no-unused-expression
        if (this.dexVal !== 0) {
            /** @type {?} */
            const val = Math.abs(this.touch.velocity);
            /** @type {?} */
            let somt = Math.floor((this.dexVal / val / this.dexVal) * (this.deviceWidth - this.dexVal));
            somt = somt > itemSpeed ? itemSpeed : somt;
            itemSpeed = somt < 200 ? 200 : somt;
            this.dexVal = 0;
        }
        if (this.withAnim) {
            this._setStyle(this.nguItemsContainer.nativeElement, 'transition', `transform ${itemSpeed}ms ${this.inputs.easing}`);
            this.inputs.animation &&
                this._carouselAnimator(Btn, currentSlide + 1, currentSlide + this.items, itemSpeed, Math.abs(this.currentSlide - currentSlide));
        }
        else {
            this._setStyle(this.nguItemsContainer.nativeElement, 'transition', ``);
        }
        // console.log(this.dataSource);
        this.itemLength = this.dataSource.length;
        this._transformStyle(currentSlide);
        this.currentSlide = currentSlide;
        this.onMove.emit(this);
        this._carouselPointActiver();
        this._carouselLoadTrigger();
        this.withAnim = true;
        // if (currentSlide === 12) {
        //   this._switchDataSource(this.dataSource);
        // }
    }
    /**
     * boolean function for making isFirst and isLast
     * @private
     * @param {?} first
     * @param {?} last
     * @return {?}
     */
    _btnBoolean(first, last) {
        this.isFirst = !!first;
        this.isLast = !!last;
    }
    /**
     * @private
     * @param {?} grid
     * @param {?} slide
     * @return {?}
     */
    _transformString(grid, slide) {
        /** @type {?} */
        let collect = '';
        collect += `${this.styleid} { transform: translate3d(`;
        if (this.vertical.enabled) {
            this.transform[grid] =
                (this.vertical.height / this.inputs.grid[grid]) * slide;
            collect += `0, -${this.transform[grid]}px, 0`;
        }
        else {
            this.transform[grid] = (100 / this.inputs.grid[grid]) * slide;
            collect += `${this.directionSym}${this.transform[grid]}%, 0, 0`;
        }
        collect += `); }`;
        return collect;
    }
    /**
     * set the transform style to scroll the carousel
     * @private
     * @param {?} slide
     * @return {?}
     */
    _transformStyle(slide) {
        /** @type {?} */
        let slideCss = '';
        if (this.type === 'responsive') {
            slideCss = `@media (max-width: 767px) {${this._transformString('xs', slide)}}
      @media (min-width: 768px) {${this._transformString('sm', slide)} }
      @media (min-width: 992px) {${this._transformString('md', slide)} }
      @media (min-width: 1200px) {${this._transformString('lg', slide)} }`;
        }
        else {
            this.transform.all = this.inputs.grid.all * slide;
            slideCss = `${this.styleid} { transform: translate3d(${this.directionSym}${this.transform.all}px, 0, 0);`;
        }
        this.carouselCssNode.innerHTML = slideCss;
    }
    /**
     * this will trigger the carousel to load the items
     * @private
     * @return {?}
     */
    _carouselLoadTrigger() {
        if (typeof this.inputs.load === 'number') {
            this.dataSource.length - this.load <= this.currentSlide + this.items &&
                this.carouselLoad.emit(this.currentSlide);
        }
    }
    /**
     * generate Class for each carousel to set specific style
     * @private
     * @return {?}
     */
    _generateID() {
        /** @type {?} */
        let text = '';
        /** @type {?} */
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 6; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return `ngucarousel${text}`;
    }
    /**
     * handle the auto slide
     * @private
     * @return {?}
     */
    _carouselInterval() {
        /** @type {?} */
        const container = this.carouselMain1.nativeElement;
        if (this.interval && this.loop) {
            this.listener4 = this._renderer.listen('window', 'scroll', (/**
             * @return {?}
             */
            () => {
                clearTimeout(this.onScrolling);
                this.onScrolling = setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this._onWindowScrolling();
                }), 600);
            }));
            /** @type {?} */
            const play$ = fromEvent(container, 'mouseleave').pipe(mapTo(1));
            /** @type {?} */
            const pause$ = fromEvent(container, 'mouseenter').pipe(mapTo(0));
            /** @type {?} */
            const touchPlay$ = fromEvent(container, 'touchstart').pipe(mapTo(1));
            /** @type {?} */
            const touchPause$ = fromEvent(container, 'touchend').pipe(mapTo(0));
            /** @type {?} */
            const interval$ = interval(this.inputs.interval.timing).pipe(mapTo(1));
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.carouselInt = merge(play$, touchPlay$, pause$, touchPause$, this._intervalController$)
                    .pipe(startWith(1), switchMap((/**
                 * @param {?} val
                 * @return {?}
                 */
                val => {
                    this.isHovered = !val;
                    this.cdr.markForCheck();
                    return val ? interval$ : empty();
                })))
                    .subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    this._carouselScrollOne(1);
                }));
            }), this.interval.initialDelay);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _updateItemIndexContextAni() {
        /** @type {?} */
        const viewContainer = this._nodeOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            /** @type {?} */
            const viewRef = (/** @type {?} */ (viewContainer.get(renderIndex)));
            /** @type {?} */
            const context = (/** @type {?} */ (viewRef.context));
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            context.index = renderIndex;
        }
    }
    /**
     * animate the carousel items
     * @private
     * @param {?} direction
     * @param {?} start
     * @param {?} end
     * @param {?} speed
     * @param {?} length
     * @param {?=} viewContainer
     * @return {?}
     */
    _carouselAnimator(direction, start, end, speed, length, viewContainer = this._nodeOutlet.viewContainer) {
        /** @type {?} */
        let val = length < 5 ? length : 5;
        val = val === 1 ? 3 : val;
        /** @type {?} */
        const collectIndex = [];
        if (direction === 1) {
            for (let i = start - 1; i < end; i++) {
                collectIndex.push(i);
                val = val * 2;
                /** @type {?} */
                const viewRef = (/** @type {?} */ (viewContainer.get(i)));
                /** @type {?} */
                const context = (/** @type {?} */ (viewRef.context));
                context.animate = { value: true, params: { distance: val } };
            }
        }
        else {
            for (let i = end - 1; i >= start - 1; i--) {
                collectIndex.push(i);
                val = val * 2;
                /** @type {?} */
                const viewRef = (/** @type {?} */ (viewContainer.get(i)));
                /** @type {?} */
                const context = (/** @type {?} */ (viewRef.context));
                context.animate = { value: true, params: { distance: -val } };
            }
        }
        this.cdr.markForCheck();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._removeAnimations(collectIndex);
        }), speed * 0.7);
    }
    /**
     * @private
     * @param {?} indexs
     * @return {?}
     */
    _removeAnimations(indexs) {
        /** @type {?} */
        const viewContainer = this._nodeOutlet.viewContainer;
        indexs.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => {
            /** @type {?} */
            const viewRef = (/** @type {?} */ (viewContainer.get(i)));
            /** @type {?} */
            const context = (/** @type {?} */ (viewRef.context));
            context.animate = { value: false, params: { distance: 0 } };
        }));
        this.cdr.markForCheck();
    }
    /**
     * Short form for setElementStyle
     * @private
     * @param {?} el
     * @param {?} prop
     * @param {?} val
     * @return {?}
     */
    _setStyle(el, prop, val) {
        this._renderer.setStyle(el, prop, val);
    }
    /**
     * For generating style tag
     * @private
     * @param {?=} datas
     * @return {?}
     */
    _createStyleElem(datas) {
        /** @type {?} */
        const styleItem = this._renderer.createElement('style');
        if (datas) {
            /** @type {?} */
            const styleText = this._renderer.createText(datas);
            this._renderer.appendChild(styleItem, styleText);
        }
        this._renderer.appendChild(this.carousel, styleItem);
        return styleItem;
    }
}
NguCarousel.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngu-carousel',
                template: `<div #ngucarousel class="ngucarousel">
  <div #touchContainer class="ngu-touch-container">
    <div #nguItemsContainer class="ngucarousel-items">
      <ng-container nguCarouselOutlet></ng-container>
    </div>
  </div>
  <div class="nguclearFix"></div>
  <ng-content select="[NguCarouselPrev]"></ng-content>
  <ng-content select="[NguCarouselNext]"></ng-content>
</div>
<ng-content select="[NguCarouselPoint]"></ng-content>
`,
                styles: [`:host{display:block;position:relative}:host.ngurtl{direction:rtl}.ngucarousel{position:relative;overflow:hidden;height:100%}.ngucarousel .ngucarousel-items{position:relative;display:flex;height:100%}.nguvertical{flex-direction:column}.banner .ngucarouselPointDefault .ngucarouselPoint{position:absolute;width:100%;bottom:20px}.banner .ngucarouselPointDefault .ngucarouselPoint li{background:rgba(255,255,255,.55)}.banner .ngucarouselPointDefault .ngucarouselPoint li.active{background:#fff}.banner .ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.ngucarouselPointDefault .ngucarouselPoint{list-style-type:none;text-align:center;padding:12px;margin:0;white-space:nowrap;overflow:auto;box-sizing:border-box}.ngucarouselPointDefault .ngucarouselPoint li{display:inline-block;border-radius:50%;background:rgba(0,0,0,.55);padding:4px;margin:0 4px;transition:.4s}.ngucarouselPointDefault .ngucarouselPoint li.active{background:#6b6b6b;-webkit-transform:scale(1.8);transform:scale(1.8)}.ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.nguclearFix{clear:both}`],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
NguCarousel.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: IterableDiffers },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ChangeDetectorRef }
];
NguCarousel.propDecorators = {
    inputs: [{ type: Input, args: ['inputs',] }],
    carouselLoad: [{ type: Output, args: ['carouselLoad',] }],
    onMove: [{ type: Output, args: ['onMove',] }],
    dataSource: [{ type: Input, args: ['dataSource',] }],
    _defDirec: [{ type: ContentChildren, args: [NguCarouselDefDirective,] }],
    _nodeOutlet: [{ type: ViewChild, args: [NguCarouselOutlet,] }],
    nextBtn: [{ type: ContentChild, args: [NguCarouselNextDirective, { read: ElementRef },] }],
    prevBtn: [{ type: ContentChild, args: [NguCarouselPrevDirective, { read: ElementRef },] }],
    carouselMain1: [{ type: ViewChild, args: ['ngucarousel', { read: ElementRef },] }],
    nguItemsContainer: [{ type: ViewChild, args: ['nguItemsContainer', { read: ElementRef },] }],
    touchContainer: [{ type: ViewChild, args: ['touchContainer', { read: ElementRef },] }],
    trackBy: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NguItemComponent {
    constructor() {
        this.classes = true;
    }
}
NguItemComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngu-item',
                template: `<ng-content></ng-content>
`,
                styles: [``]
            },] },
];
NguItemComponent.propDecorators = {
    classes: [{ type: HostBinding, args: ['class.item',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NguTileComponent {
    constructor() {
        this.classes = true;
    }
}
NguTileComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngu-tile',
                template: `<div class="tile">
  <ng-content></ng-content>
</div>
`,
                styles: [`:host{padding:10px;box-sizing:border-box}.tile{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}`]
            },] },
];
NguTileComponent.propDecorators = {
    classes: [{ type: HostBinding, args: ['class.item',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NguCarouselModule {
}
NguCarouselModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [
                    NguCarousel,
                    NguItemComponent,
                    NguTileComponent,
                    NguCarouselPointDirective,
                    NguCarouselItemDirective,
                    NguCarouselNextDirective,
                    NguCarouselPrevDirective,
                    NguCarouselDefDirective,
                    NguCarouselOutlet
                ],
                declarations: [
                    NguCarousel,
                    NguItemComponent,
                    NguTileComponent,
                    NguCarouselPointDirective,
                    NguCarouselItemDirective,
                    NguCarouselNextDirective,
                    NguCarouselPrevDirective,
                    NguCarouselDefDirective,
                    NguCarouselOutlet
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NguCarouselConfig, NguCarouselStore, NguCarousel, NguCarouselModule, NguCarouselDefDirective as ɵg, NguCarouselItemDirective as ɵc, NguCarouselNextDirective as ɵd, NguCarouselOutlet as ɵh, NguCarouselPointDirective as ɵf, NguCarouselPrevDirective as ɵe, ItemsControl as ɵa, NguButton as ɵb, NguItemComponent as ɵi, NguTileComponent as ɵj };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1LWNhcm91c2VsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Abmd1L2Nhcm91c2VsL2xpYi9uZ3UtY2Fyb3VzZWwvbmd1LWNhcm91c2VsLnRzIiwibmc6Ly9Abmd1L2Nhcm91c2VsL2xpYi9uZ3UtY2Fyb3VzZWwuZGlyZWN0aXZlLnRzIiwibmc6Ly9Abmd1L2Nhcm91c2VsL2xpYi9uZ3UtY2Fyb3VzZWwvbmd1LWNhcm91c2VsLmNvbXBvbmVudC50cyIsIm5nOi8vQG5ndS9jYXJvdXNlbC9saWIvbmd1LWl0ZW0vbmd1LWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9Abmd1L2Nhcm91c2VsL2xpYi9uZ3UtdGlsZS9uZ3UtdGlsZS5jb21wb25lbnQudHMiLCJuZzovL0BuZ3UvY2Fyb3VzZWwvbGliL25ndS1jYXJvdXNlbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsU3RvcmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdG91Y2ggPSBuZXcgVG91Y2goKSxcbiAgICBwdWJsaWMgdmVydGljYWwgPSBuZXcgVmVydGljYWwoKSxcbiAgICBwdWJsaWMgaW50ZXJ2YWw/OiBDYXJvdXNlbEludGVydmFsLFxuICAgIHB1YmxpYyB0cmFuc2Zvcm0gPSBuZXcgVHJhbnNmcm9tKCksXG4gICAgcHVibGljIGJ1dHRvbj86IE5ndUJ1dHRvbixcbiAgICBwdWJsaWMgdmlzaWJsZUl0ZW1zPzogSXRlbXNDb250cm9sLFxuICAgIHB1YmxpYyBkZXZpY2VUeXBlPzogRGV2aWNlVHlwZSxcbiAgICBwdWJsaWMgdHlwZSA9ICdmaXhlZCcsXG4gICAgcHVibGljIHRva2VuID0gJycsXG4gICAgcHVibGljIGl0ZW1zID0gMCxcbiAgICBwdWJsaWMgbG9hZCA9IDAsXG4gICAgcHVibGljIGRldmljZVdpZHRoID0gMCxcbiAgICBwdWJsaWMgY2Fyb3VzZWxXaWR0aCA9IDAsXG4gICAgcHVibGljIGl0ZW1XaWR0aCA9IDAsXG4gICAgcHVibGljIHNsaWRlSXRlbXMgPSAwLFxuICAgIHB1YmxpYyBpdGVtV2lkdGhQZXIgPSAwLFxuICAgIHB1YmxpYyBpdGVtTGVuZ3RoID0gMCxcbiAgICBwdWJsaWMgY3VycmVudFNsaWRlID0gMCxcbiAgICBwdWJsaWMgZWFzaW5nID0gJ2N1YmljLWJlemllcigwLCAwLCAwLjIsIDEpJyxcbiAgICBwdWJsaWMgc3BlZWQgPSAyMDAsXG4gICAgcHVibGljIGxvb3AgPSBmYWxzZSxcbiAgICBwdWJsaWMgZGV4VmFsID0gMCxcbiAgICBwdWJsaWMgdG91Y2hUcmFuc2Zvcm0gPSAwLFxuICAgIHB1YmxpYyBpc0VuZCA9IGZhbHNlLFxuICAgIHB1YmxpYyBpc0ZpcnN0ID0gdHJ1ZSxcbiAgICBwdWJsaWMgaXNMYXN0ID0gZmFsc2UsXG4gICAgcHVibGljIFJUTCA9IGZhbHNlLFxuICAgIHB1YmxpYyBwb2ludCA9IHRydWUsXG4gICAgcHVibGljIHZlbG9jaXR5ID0gMVxuICApIHt9XG59XG5leHBvcnQgdHlwZSBEZXZpY2VUeXBlID0gJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICdhbGwnO1xuXG5leHBvcnQgdHlwZSBCdXR0b25WaXNpYmxlID0gJ2Rpc2FibGVkJyB8ICdoaWRlJztcblxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29udHJvbCB7XG4gIHN0YXJ0OiBudW1iZXI7XG4gIGVuZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgVmVydGljYWwge1xuICBlbmFibGVkOiBib29sZWFuO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLy8gbnVtSGVpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTmd1QnV0dG9uIHtcbiAgdmlzaWJpbGl0eT86IEJ1dHRvblZpc2libGU7XG4gIGVsYXN0aWM/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBUb3VjaCB7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIHN3aXBlOiBzdHJpbmc7XG4gIHZlbG9jaXR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2Zyb20ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgeHMgPSAwLFxuICAgIHB1YmxpYyBzbSA9IDAsXG4gICAgcHVibGljIG1kID0gMCxcbiAgICBwdWJsaWMgbGcgPSAwLFxuICAgIHB1YmxpYyBhbGwgPSAwXG4gICkge31cbn1cblxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsQ29uZmlnIHtcbiAgZ3JpZDogVHJhbnNmcm9tO1xuICBzbGlkZT86IG51bWJlcjtcbiAgc3BlZWQ/OiBudW1iZXI7XG4gIGludGVydmFsPzogQ2Fyb3VzZWxJbnRlcnZhbDtcbiAgYW5pbWF0aW9uPzogQW5pbWF0ZTtcbiAgcG9pbnQ/OiBQb2ludDtcbiAgdHlwZT86IHN0cmluZztcbiAgbG9hZD86IG51bWJlcjtcbiAgY3VzdG9tPzogQ3VzdG9tO1xuICBsb29wPzogYm9vbGVhbjtcbiAgdG91Y2g/OiBib29sZWFuO1xuICBlYXNpbmc/OiBzdHJpbmc7XG4gIFJUTD86IGJvb2xlYW47XG4gIGJ1dHRvbj86IE5ndUJ1dHRvbjtcbiAgdmVydGljYWw/OiBWZXJ0aWNhbDtcbiAgdmVsb2NpdHk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIEN1c3RvbSA9ICdiYW5uZXInO1xuZXhwb3J0IHR5cGUgQW5pbWF0ZSA9ICdsYXp5JztcblxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gIHZpc2libGU6IGJvb2xlYW47XG4gIGhpZGVPblNpbmdsZVNsaWRlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb24ge1xuICB0eXBlPzogQW5pbWF0ZTtcbiAgYW5pbWF0ZVN0eWxlcz86IEFuaW1hdGlvblN0eWxlcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25TdHlsZXMge1xuICBzdHlsZT86IHN0cmluZztcbiAgb3Blbj86IHN0cmluZztcbiAgY2xvc2U/OiBzdHJpbmc7XG4gIHN0YWdnZXI/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2Fyb3VzZWxJbnRlcnZhbCB7XG4gIHRpbWluZzogbnVtYmVyO1xuICBpbml0aWFsRGVsYXk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE91dGxldENvbnRleHQ8VD4ge1xuICAvKiogRGF0YSBmb3IgdGhlIG5vZGUuICovXG4gICRpbXBsaWNpdDogVDtcblxuICAvKiogRGVwdGggb2YgdGhlIG5vZGUuICovXG4gIGxldmVsOiBudW1iZXI7XG5cbiAgLyoqIEluZGV4IGxvY2F0aW9uIG9mIHRoZSBub2RlLiAqL1xuICBpbmRleD86IG51bWJlcjtcblxuICAvKiogTGVuZ3RoIG9mIHRoZSBudW1iZXIgb2YgdG90YWwgZGF0YU5vZGVzLiAqL1xuICBjb3VudD86IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBUKSB7XG4gICAgdGhpcy4kaW1wbGljaXQgPSBkYXRhO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW05ndUNhcm91c2VsSXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tOZ3VDYXJvdXNlbE5leHRdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUge1xuICAvLyBASG9zdEJpbmRpbmcoJ2Rpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIC8vIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpIGRpc3BsYXkgPSAnYmxvY2snO1xuICAvLyBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIC8vIG9uQ2xpY2soKSB7XG4gIC8vIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbTmd1Q2Fyb3VzZWxQcmV2XSdcbn0pXG5leHBvcnQgY2xhc3MgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlIHtcbiAgLy8gQEhvc3RCaW5kaW5nKCdkaXNhYmxlZCcpIGRpc2FibGVkOiBib29sZWFuO1xuICAvLyBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKSBkaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbTmd1Q2Fyb3VzZWxQb2ludF0nXG59KVxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUge31cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbmd1Q2Fyb3VzZWxEZWZdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxUPiB7XG4gIHdoZW46IChpbmRleDogbnVtYmVyLCBub2RlRGF0YTogVCkgPT4gYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW25ndUNhcm91c2VsT3V0bGV0XSdcbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsT3V0bGV0IHtcbiAgY29uc3RydWN0b3IocHVibGljIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHt9XG59XG4iLCJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERvQ2hlY2ssXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgaXNEZXZNb2RlLFxuICBJdGVyYWJsZUNoYW5nZVJlY29yZCxcbiAgSXRlcmFibGVDaGFuZ2VzLFxuICBJdGVyYWJsZURpZmZlcixcbiAgSXRlcmFibGVEaWZmZXJzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBQTEFURk9STV9JRCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFRyYWNrQnlGdW5jdGlvbixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgZW1wdHksXG4gIGZyb21FdmVudCxcbiAgaW50ZXJ2YWwsXG4gIG1lcmdlLFxuICBPYnNlcnZhYmxlLFxuICBvZixcbiAgU3ViamVjdCxcbiAgU3Vic2NyaXB0aW9uXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwVG8sIHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcbiAgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLFxuICBOZ3VDYXJvdXNlbE91dGxldCxcbiAgTmd1Q2Fyb3VzZWxQcmV2RGlyZWN0aXZlXG59IGZyb20gJy4vLi4vbmd1LWNhcm91c2VsLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1xuICBOZ3VDYXJvdXNlbENvbmZpZyxcbiAgTmd1Q2Fyb3VzZWxPdXRsZXRDb250ZXh0LFxuICBOZ3VDYXJvdXNlbFN0b3JlXG59IGZyb20gJy4vbmd1LWNhcm91c2VsJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduZ3UtY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZTogYDxkaXYgI25ndWNhcm91c2VsIGNsYXNzPVwibmd1Y2Fyb3VzZWxcIj5cbiAgPGRpdiAjdG91Y2hDb250YWluZXIgY2xhc3M9XCJuZ3UtdG91Y2gtY29udGFpbmVyXCI+XG4gICAgPGRpdiAjbmd1SXRlbXNDb250YWluZXIgY2xhc3M9XCJuZ3VjYXJvdXNlbC1pdGVtc1wiPlxuICAgICAgPG5nLWNvbnRhaW5lciBuZ3VDYXJvdXNlbE91dGxldD48L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJuZ3VjbGVhckZpeFwiPjwvZGl2PlxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbTmd1Q2Fyb3VzZWxQcmV2XVwiPjwvbmctY29udGVudD5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW05ndUNhcm91c2VsTmV4dF1cIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbjxuZy1jb250ZW50IHNlbGVjdD1cIltOZ3VDYXJvdXNlbFBvaW50XVwiPjwvbmctY29udGVudD5cbmAsXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfTpob3N0Lm5ndXJ0bHtkaXJlY3Rpb246cnRsfS5uZ3VjYXJvdXNlbHtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47aGVpZ2h0OjEwMCV9Lm5ndWNhcm91c2VsIC5uZ3VjYXJvdXNlbC1pdGVtc3twb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7aGVpZ2h0OjEwMCV9Lm5ndXZlcnRpY2Fse2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uYmFubmVyIC5uZ3VjYXJvdXNlbFBvaW50RGVmYXVsdCAubmd1Y2Fyb3VzZWxQb2ludHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2JvdHRvbToyMHB4fS5iYW5uZXIgLm5ndWNhcm91c2VsUG9pbnREZWZhdWx0IC5uZ3VjYXJvdXNlbFBvaW50IGxpe2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuNTUpfS5iYW5uZXIgLm5ndWNhcm91c2VsUG9pbnREZWZhdWx0IC5uZ3VjYXJvdXNlbFBvaW50IGxpLmFjdGl2ZXtiYWNrZ3JvdW5kOiNmZmZ9LmJhbm5lciAubmd1Y2Fyb3VzZWxQb2ludERlZmF1bHQgLm5ndWNhcm91c2VsUG9pbnQgbGk6aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9Lm5ndWNhcm91c2VsUG9pbnREZWZhdWx0IC5uZ3VjYXJvdXNlbFBvaW50e2xpc3Qtc3R5bGUtdHlwZTpub25lO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MTJweDttYXJnaW46MDt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6YXV0bztib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm5ndWNhcm91c2VsUG9pbnREZWZhdWx0IC5uZ3VjYXJvdXNlbFBvaW50IGxpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNTUpO3BhZGRpbmc6NHB4O21hcmdpbjowIDRweDt0cmFuc2l0aW9uOi40c30ubmd1Y2Fyb3VzZWxQb2ludERlZmF1bHQgLm5ndWNhcm91c2VsUG9pbnQgbGkuYWN0aXZle2JhY2tncm91bmQ6IzZiNmI2Yjstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjgpO3RyYW5zZm9ybTpzY2FsZSgxLjgpfS5uZ3VjYXJvdXNlbFBvaW50RGVmYXVsdCAubmd1Y2Fyb3VzZWxQb2ludCBsaTpob3ZlcntjdXJzb3I6cG9pbnRlcn0ubmd1Y2xlYXJGaXh7Y2xlYXI6Ym90aH1gXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LWNsYXNzLXN1ZmZpeFxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsPFQ+IGV4dGVuZHMgTmd1Q2Fyb3VzZWxTdG9yZVxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBEb0NoZWNrIHtcbiAgX2RhdGFTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgX2RhdGFTb3VyY2U6IGFueTtcbiAgX2RhdGFEaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPHt9PjtcbiAgc3R5bGVpZDogc3RyaW5nO1xuICBwcml2YXRlIGRpcmVjdGlvblN5bTogc3RyaW5nO1xuICBwcml2YXRlIGNhcm91c2VsQ3NzTm9kZTogYW55O1xuICBwcml2YXRlIHBvaW50SW5kZXg6IG51bWJlcjtcbiAgcHJpdmF0ZSB3aXRoQW5pbSA9IHRydWU7XG4gIGFjdGl2ZVBvaW50OiBudW1iZXI7XG4gIGlzSG92ZXJlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnaW5wdXRzJylcbiAgcHJpdmF0ZSBpbnB1dHM6IE5ndUNhcm91c2VsQ29uZmlnO1xuICBAT3V0cHV0KCdjYXJvdXNlbExvYWQnKVxuICBwcml2YXRlIGNhcm91c2VsTG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW9uLXByZWZpeFxuICBAT3V0cHV0KCdvbk1vdmUnKVxuICBwcml2YXRlIG9uTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Tmd1Q2Fyb3VzZWw8VD4+KCk7XG4gIC8vIGlzRmlyc3RzcyA9IDA7XG4gIGFycmF5Q2hhbmdlczogSXRlcmFibGVDaGFuZ2VzPHt9PjtcbiAgY2Fyb3VzZWxJbnQ6IFN1YnNjcmlwdGlvbjtcblxuICBsaXN0ZW5lcjE6ICgpID0+IHZvaWQ7XG4gIGxpc3RlbmVyMjogKCkgPT4gdm9pZDtcbiAgbGlzdGVuZXIzOiAoKSA9PiB2b2lkO1xuICBsaXN0ZW5lcjQ6ICgpID0+IHZvaWQ7XG5cbiAgQElucHV0KCdkYXRhU291cmNlJylcbiAgZ2V0IGRhdGFTb3VyY2UoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZTtcbiAgfVxuICBzZXQgZGF0YVNvdXJjZShkYXRhOiBhbnkpIHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSwgdGhpcy5kYXRhU291cmNlKTtcbiAgICAgIC8vIHRoaXMuaXNGaXJzdHNzKys7XG4gICAgICB0aGlzLl9zd2l0Y2hEYXRhU291cmNlKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RlZmF1bHROb2RlRGVmOiBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZTxhbnk+IHwgbnVsbDtcblxuICBAQ29udGVudENoaWxkcmVuKE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlKVxuICBwcml2YXRlIF9kZWZEaXJlYzogUXVlcnlMaXN0PE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlPGFueT4+O1xuXG4gIEBWaWV3Q2hpbGQoTmd1Q2Fyb3VzZWxPdXRsZXQpXG4gIF9ub2RlT3V0bGV0OiBOZ3VDYXJvdXNlbE91dGxldDtcblxuICAvKiogVGhlIHNldHRlciBpcyB1c2VkIHRvIGNhdGNoIHRoZSBidXR0b24gaWYgdGhlIGJ1dHRvbiBoYXMgbmdJZlxuICAgKiBpc3N1ZSBpZCAjOTFcbiAgICovXG4gIEBDb250ZW50Q2hpbGQoTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgc2V0IG5leHRCdG4oYnRuOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5saXN0ZW5lcjIgJiYgdGhpcy5saXN0ZW5lcjIoKTtcbiAgICBpZiAoYnRuKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyMiA9IHRoaXMuX3JlbmRlcmVyLmxpc3RlbihidG4ubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoMSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFRoZSBzZXR0ZXIgaXMgdXNlZCB0byBjYXRjaCB0aGUgYnV0dG9uIGlmIHRoZSBidXR0b24gaGFzIG5nSWZcbiAgICogaXNzdWUgaWQgIzkxXG4gICAqL1xuICBAQ29udGVudENoaWxkKE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSwgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIHNldCBwcmV2QnRuKGJ0bjogRWxlbWVudFJlZikge1xuICAgIHRoaXMubGlzdGVuZXIxICYmIHRoaXMubGlzdGVuZXIxKCk7XG4gICAgaWYgKGJ0bikge1xuICAgICAgdGhpcy5saXN0ZW5lcjEgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oYnRuLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsICgpID0+XG4gICAgICAgIHRoaXMuX2Nhcm91c2VsU2Nyb2xsT25lKDApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ25ndWNhcm91c2VsJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIHByaXZhdGUgY2Fyb3VzZWxNYWluMTogRWxlbWVudFJlZjtcblxuICBAVmlld0NoaWxkKCduZ3VJdGVtc0NvbnRhaW5lcicsIHsgcmVhZDogRWxlbWVudFJlZiB9KVxuICBwcml2YXRlIG5ndUl0ZW1zQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIEBWaWV3Q2hpbGQoJ3RvdWNoQ29udGFpbmVyJywgeyByZWFkOiBFbGVtZW50UmVmIH0pXG4gIHByaXZhdGUgdG91Y2hDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBfaW50ZXJ2YWxDb250cm9sbGVyJCA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICBwcml2YXRlIGNhcm91c2VsOiBhbnk7XG5cbiAgcHJpdmF0ZSBvblJlc2l6ZTogYW55O1xuICBwcml2YXRlIG9uU2Nyb2xsaW5nOiBhbnk7XG5cbiAgcG9pbnROdW1iZXJzOiBBcnJheTxhbnk+ID0gW107XG5cbiAgLyoqXG4gICAqIFRyYWNraW5nIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNoZWNrIHRoZSBkaWZmZXJlbmNlcyBpbiBkYXRhIGNoYW5nZXMuIFVzZWQgc2ltaWxhcmx5XG4gICAqIHRvIGBuZ0ZvcmAgYHRyYWNrQnlgIGZ1bmN0aW9uLiBPcHRpbWl6ZSBJdGVtcyBvcGVyYXRpb25zIGJ5IGlkZW50aWZ5aW5nIGEgSXRlbXMgYmFzZWQgb24gaXRzIGRhdGFcbiAgICogcmVsYXRpdmUgdG8gdGhlIGZ1bmN0aW9uIHRvIGtub3cgaWYgYSBJdGVtcyBzaG91bGQgYmUgYWRkZWQvcmVtb3ZlZC9tb3ZlZC5cbiAgICogQWNjZXB0cyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdHdvIHBhcmFtZXRlcnMsIGBpbmRleGAgYW5kIGBpdGVtYC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCB0cmFja0J5KCk6IFRyYWNrQnlGdW5jdGlvbjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RyYWNrQnlGbjtcbiAgfVxuICBzZXQgdHJhY2tCeShmbjogVHJhY2tCeUZ1bmN0aW9uPFQ+KSB7XG4gICAgaWYgKFxuICAgICAgaXNEZXZNb2RlKCkgJiZcbiAgICAgIGZuICE9IG51bGwgJiZcbiAgICAgIHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgPGFueT5jb25zb2xlICYmXG4gICAgICA8YW55PmNvbnNvbGUud2FyblxuICAgICkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgdHJhY2tCeSBtdXN0IGJlIGEgZnVuY3Rpb24sIGJ1dCByZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KGZuKX0uYFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5fdHJhY2tCeUZuID0gZm47XG4gIH1cbiAgcHJpdmF0ZSBfdHJhY2tCeUZuOiBUcmFja0J5RnVuY3Rpb248VD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIF9kaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9kYXRhRGlmZmVyID0gdGhpcy5fZGlmZmVyc1xuICAgICAgLmZpbmQoW10pXG4gICAgICAuY3JlYXRlKChfaTogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhY2tCeSA/IHRoaXMudHJhY2tCeShpdGVtLmRhdGFJbmRleCwgaXRlbS5kYXRhKSA6IGl0ZW07XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICB0aGlzLmFycmF5Q2hhbmdlcyA9IHRoaXMuX2RhdGFEaWZmZXIuZGlmZih0aGlzLmRhdGFTb3VyY2UpO1xuICAgIGlmICh0aGlzLmFycmF5Q2hhbmdlcyAmJiB0aGlzLl9kZWZEaXJlYykge1xuICAgICAgLy8gY29uc29sZS5sb2coJ0NoYW5nZXMgZGV0ZWN0ZWQhJyk7XG4gICAgICB0aGlzLl9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N3aXRjaERhdGFTb3VyY2UoZGF0YVNvdXJjZTogYW55KTogYW55IHtcbiAgICB0aGlzLl9kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcbiAgICBpZiAodGhpcy5fZGVmRGlyZWMpIHtcbiAgICAgIHRoaXMuX29ic2VydmVSZW5kZXJDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKSB7XG4gICAgbGV0IGRhdGFTdHJlYW06IE9ic2VydmFibGU8YW55W10+IHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRoaXMuX2RhdGFTb3VyY2UgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XG4gICAgICBkYXRhU3RyZWFtID0gdGhpcy5fZGF0YVNvdXJjZTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5fZGF0YVNvdXJjZSkpIHtcbiAgICAgIGRhdGFTdHJlYW0gPSBvZih0aGlzLl9kYXRhU291cmNlKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YVN0cmVhbSkge1xuICAgICAgdGhpcy5fZGF0YVN1YnNjcmlwdGlvbiA9IGRhdGFTdHJlYW1cbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2ludGVydmFsQ29udHJvbGxlciQpKVxuICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyTm9kZUNoYW5nZXMoZGF0YSk7XG4gICAgICAgICAgdGhpcy5pc0xhc3QgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJOb2RlQ2hhbmdlcyhcbiAgICBkYXRhOiBhbnlbXSxcbiAgICB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyXG4gICkge1xuICAgIGlmICghdGhpcy5hcnJheUNoYW5nZXMpIHJldHVybjtcblxuICAgIHRoaXMuYXJyYXlDaGFuZ2VzLmZvckVhY2hPcGVyYXRpb24oXG4gICAgICAoXG4gICAgICAgIGl0ZW06IEl0ZXJhYmxlQ2hhbmdlUmVjb3JkPGFueT4sXG4gICAgICAgIGFkanVzdGVkUHJldmlvdXNJbmRleDogbnVtYmVyLFxuICAgICAgICBjdXJyZW50SW5kZXg6IG51bWJlclxuICAgICAgKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IG5vZGUgPSB0aGlzLl9kZWZEaXJlYy5maW5kKGl0ZW1zID0+IGl0ZW0uaXRlbSk7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9nZXROb2RlRGVmKGRhdGFbY3VycmVudEluZGV4XSwgY3VycmVudEluZGV4KTtcblxuICAgICAgICBpZiAoaXRlbS5wcmV2aW91c0luZGV4ID09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gbmV3IE5ndUNhcm91c2VsT3V0bGV0Q29udGV4dDxhbnk+KGRhdGFbY3VycmVudEluZGV4XSk7XG4gICAgICAgICAgY29udGV4dC5pbmRleCA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICB2aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgICAgICAgIG5vZGUudGVtcGxhdGUsXG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgY3VycmVudEluZGV4XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50SW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgIHZpZXdDb250YWluZXIucmVtb3ZlKGFkanVzdGVkUHJldmlvdXNJbmRleCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdmlldyA9IHZpZXdDb250YWluZXIuZ2V0KGFkanVzdGVkUHJldmlvdXNJbmRleCk7XG4gICAgICAgICAgdmlld0NvbnRhaW5lci5tb3ZlKHZpZXcsIGN1cnJlbnRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuX3VwZGF0ZUl0ZW1JbmRleENvbnRleHQoKTtcblxuICAgIGlmICh0aGlzLmNhcm91c2VsKSB7XG4gICAgICB0aGlzLl9zdG9yZUNhcm91c2VsRGF0YSgpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGFTb3VyY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGluZGV4LXJlbGF0ZWQgY29udGV4dCBmb3IgZWFjaCByb3cgdG8gcmVmbGVjdCBhbnkgY2hhbmdlcyBpbiB0aGUgaW5kZXggb2YgdGhlIHJvd3MsXG4gICAqIGUuZy4gZmlyc3QvbGFzdC9ldmVuL29kZC5cbiAgICovXG4gIHByaXZhdGUgX3VwZGF0ZUl0ZW1JbmRleENvbnRleHQoKSB7XG4gICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IHRoaXMuX25vZGVPdXRsZXQudmlld0NvbnRhaW5lcjtcbiAgICBmb3IgKFxuICAgICAgbGV0IHJlbmRlckluZGV4ID0gMCwgY291bnQgPSB2aWV3Q29udGFpbmVyLmxlbmd0aDtcbiAgICAgIHJlbmRlckluZGV4IDwgY291bnQ7XG4gICAgICByZW5kZXJJbmRleCsrXG4gICAgKSB7XG4gICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQocmVuZGVySW5kZXgpIGFzIGFueTtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB2aWV3UmVmLmNvbnRleHQgYXMgYW55O1xuICAgICAgY29udGV4dC5jb3VudCA9IGNvdW50O1xuICAgICAgY29udGV4dC5maXJzdCA9IHJlbmRlckluZGV4ID09PSAwO1xuICAgICAgY29udGV4dC5sYXN0ID0gcmVuZGVySW5kZXggPT09IGNvdW50IC0gMTtcbiAgICAgIGNvbnRleHQuZXZlbiA9IHJlbmRlckluZGV4ICUgMiA9PT0gMDtcbiAgICAgIGNvbnRleHQub2RkID0gIWNvbnRleHQuZXZlbjtcbiAgICAgIGNvbnRleHQuaW5kZXggPSByZW5kZXJJbmRleDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXROb2RlRGVmKGRhdGE6IGFueSwgaTogbnVtYmVyKTogTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmU8YW55PiB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5fZGVmRGlyZWMpO1xuICAgIGlmICh0aGlzLl9kZWZEaXJlYy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZWZEaXJlYy5maXJzdDtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlRGVmID1cbiAgICAgIHRoaXMuX2RlZkRpcmVjLmZpbmQoZGVmID0+IGRlZi53aGVuICYmIGRlZi53aGVuKGksIGRhdGEpKSB8fFxuICAgICAgdGhpcy5fZGVmYXVsdE5vZGVEZWY7XG5cbiAgICByZXR1cm4gbm9kZURlZjtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNhcm91c2VsID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl9pbnB1dFZhbGlkYXRpb24oKTtcblxuICAgIHRoaXMuY2Fyb3VzZWxDc3NOb2RlID0gdGhpcy5fY3JlYXRlU3R5bGVFbGVtKCk7XG5cbiAgICAvLyB0aGlzLl9idXR0b25Db250cm9sKCk7XG5cbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5fY2Fyb3VzZWxJbnRlcnZhbCgpO1xuICAgICAgaWYgKCF0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5fdG91Y2goKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubGlzdGVuZXIzID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKCd3aW5kb3cnLCAncmVzaXplJywgZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLl9vblJlc2l6aW5nKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fb25XaW5kb3dTY3JvbGxpbmcoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZVJlbmRlckNoYW5nZXMoKTtcblxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5wdXRWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMudHlwZSA9IHRoaXMuaW5wdXRzLmdyaWQuYWxsICE9PSAwID8gJ2ZpeGVkJyA6ICdyZXNwb25zaXZlJztcbiAgICB0aGlzLmxvb3AgPSB0aGlzLmlucHV0cy5sb29wIHx8IGZhbHNlO1xuICAgIHRoaXMuaW5wdXRzLmVhc2luZyA9IHRoaXMuaW5wdXRzLmVhc2luZyB8fCAnY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknO1xuICAgIHRoaXMudG91Y2guYWN0aXZlID0gdGhpcy5pbnB1dHMudG91Y2ggfHwgZmFsc2U7XG4gICAgdGhpcy5SVEwgPSB0aGlzLmlucHV0cy5SVEwgPyB0cnVlIDogZmFsc2U7XG4gICAgdGhpcy5pbnRlcnZhbCA9IHRoaXMuaW5wdXRzLmludGVydmFsIHx8IG51bGw7XG4gICAgdGhpcy52ZWxvY2l0eSA9XG4gICAgICB0eXBlb2YgdGhpcy5pbnB1dHMudmVsb2NpdHkgPT09ICdudW1iZXInXG4gICAgICAgID8gdGhpcy5pbnB1dHMudmVsb2NpdHlcbiAgICAgICAgOiB0aGlzLnZlbG9jaXR5O1xuXG4gICAgaWYgKHRoaXMuaW5wdXRzLnZlcnRpY2FsICYmIHRoaXMuaW5wdXRzLnZlcnRpY2FsLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMudmVydGljYWwuZW5hYmxlZCA9IHRoaXMuaW5wdXRzLnZlcnRpY2FsLmVuYWJsZWQ7XG4gICAgICB0aGlzLnZlcnRpY2FsLmhlaWdodCA9IHRoaXMuaW5wdXRzLnZlcnRpY2FsLmhlaWdodDtcbiAgICB9XG4gICAgdGhpcy5kaXJlY3Rpb25TeW0gPSB0aGlzLlJUTCA/ICcnIDogJy0nO1xuICAgIHRoaXMucG9pbnQgPVxuICAgICAgdGhpcy5pbnB1dHMucG9pbnQgJiYgdHlwZW9mIHRoaXMuaW5wdXRzLnBvaW50LnZpc2libGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdGhpcy5pbnB1dHMucG9pbnQudmlzaWJsZVxuICAgICAgICA6IHRydWU7XG5cbiAgICB0aGlzLl9jYXJvdXNlbFNpemUoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNsZWFySW50ZXJ2YWwodGhpcy5jYXJvdXNlbEludCk7XG4gICAgdGhpcy5jYXJvdXNlbEludCAmJiB0aGlzLmNhcm91c2VsSW50LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuY2Fyb3VzZWxMb2FkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5vbk1vdmUuY29tcGxldGUoKTtcblxuICAgIC8qKiByZW1vdmUgbGlzdGVuZXJzICovXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMub25TY3JvbGxpbmcpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgICAgY29uc3Qgc3RyID0gYGxpc3RlbmVyJHtpfWA7XG4gICAgICB0aGlzW3N0cl0gJiYgdGhpc1tzdHJdKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb25SZXNpemluZyhldmVudDogYW55KTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMub25SZXNpemUpO1xuICAgIHRoaXMub25SZXNpemUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmRldmljZVdpZHRoICE9PSBldmVudC50YXJnZXQub3V0ZXJXaWR0aCkge1xuICAgICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgYGApO1xuICAgICAgICB0aGlzLl9zdG9yZUNhcm91c2VsRGF0YSgpO1xuICAgICAgfVxuICAgIH0sIDUwMCk7XG4gIH1cblxuICAvKiogR2V0IFRvdWNoIGlucHV0ICovXG4gIHByaXZhdGUgX3RvdWNoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlucHV0cy50b3VjaCkge1xuICAgICAgY29uc3QgaGFtbWVydGltZSA9IG5ldyBIYW1tZXIodGhpcy50b3VjaENvbnRhaW5lci5uYXRpdmVFbGVtZW50KTtcbiAgICAgIGhhbW1lcnRpbWUuZ2V0KCdwYW4nKS5zZXQoeyBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fSE9SSVpPTlRBTCB9KTtcblxuICAgICAgaGFtbWVydGltZS5vbigncGFuc3RhcnQnLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmNhcm91c2VsV2lkdGggPSB0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPSB0aGlzLnRyYW5zZm9ybVt0aGlzLmRldmljZVR5cGVdO1xuICAgICAgICB0aGlzLmRleFZhbCA9IDA7XG4gICAgICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCAnJyk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsLmVuYWJsZWQpIHtcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFudXAnLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbmxlZnQnLCBldik7XG4gICAgICAgIH0pO1xuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5kb3duJywgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5yaWdodCcsIGV2KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYW1tZXJ0aW1lLm9uKCdwYW5sZWZ0JywgKGV2OiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLl90b3VjaEhhbmRsaW5nKCdwYW5sZWZ0JywgZXYpO1xuICAgICAgICB9KTtcbiAgICAgICAgaGFtbWVydGltZS5vbigncGFucmlnaHQnLCAoZXY6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuX3RvdWNoSGFuZGxpbmcoJ3BhbnJpZ2h0JywgZXYpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGhhbW1lcnRpbWUub24oJ3BhbmVuZCcsIChldjogYW55KSA9PiB7XG4gICAgICAgIGlmIChNYXRoLmFicyhldi52ZWxvY2l0eSkgPj0gdGhpcy52ZWxvY2l0eSkge1xuICAgICAgICAgIHRoaXMudG91Y2gudmVsb2NpdHkgPSBldi52ZWxvY2l0eTtcbiAgICAgICAgICBsZXQgZGlyZWMgPSAwO1xuICAgICAgICAgIGlmICghdGhpcy5SVEwpIHtcbiAgICAgICAgICAgIGRpcmVjID0gdGhpcy50b3VjaC5zd2lwZSA9PT0gJ3BhbnJpZ2h0JyA/IDAgOiAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXJlYyA9IHRoaXMudG91Y2guc3dpcGUgPT09ICdwYW5yaWdodCcgPyAxIDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoZGlyZWMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGV4VmFsID0gMDtcbiAgICAgICAgICB0aGlzLl9zZXRTdHlsZShcbiAgICAgICAgICAgIHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJyxcbiAgICAgICAgICAgICd0cmFuc2Zvcm0gMzI0bXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSknXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAnJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaGFtbWVydGltZS5vbignaGFtbWVyLmlucHV0JywgZnVuY3Rpb24oZXYpIHtcbiAgICAgICAgLy8gYWxsb3cgbmVzdGVkIHRvdWNoIGV2ZW50cyB0byBubyBwcm9wYWdhdGUsIHRoaXMgbWF5IGhhdmUgb3RoZXIgc2lkZSBhZmZlY3RzIGJ1dCB3b3JrcyBmb3Igbm93LlxuICAgICAgICAvLyBUT0RPOiBJdCBpcyBwcm9iYWJseSBiZXR0ZXIgdG8gY2hlY2sgdGhlIHNvdXJjZSBlbGVtZW50IG9mIHRoZSBldmVudCBhbmQgb25seSBhcHBseSB0aGUgaGFuZGxlIHRvIHRoZSBjb3JyZWN0IGNhcm91c2VsXG4gICAgICAgIGV2LnNyY0V2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIGhhbmRsZSB0b3VjaCBpbnB1dCAqL1xuICBwcml2YXRlIF90b3VjaEhhbmRsaW5nKGU6IHN0cmluZywgZXY6IGFueSk6IHZvaWQge1xuICAgIC8vIHZlcnRpY2FsIHRvdWNoIGV2ZW50cyBzZWVtIHRvIGNhdXNlIHRvIHBhbnN0YXJ0IGV2ZW50IHdpdGggYW4gb2RkIGRlbHRhXG4gICAgLy8gYW5kIGEgY2VudGVyIG9mIHt4OjAseTowfSBzbyB0aGlzIHdpbGwgaWdub3JlIHRoZW1cbiAgICBpZiAoZXYuY2VudGVyLnggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldiA9IE1hdGguYWJzKHRoaXMudmVydGljYWwuZW5hYmxlZCA/IGV2LmRlbHRhWSA6IGV2LmRlbHRhWCk7XG4gICAgbGV0IHZhbHQgPSBldiAtIHRoaXMuZGV4VmFsO1xuICAgIHZhbHQgPVxuICAgICAgdGhpcy50eXBlID09PSAncmVzcG9uc2l2ZSdcbiAgICAgICAgPyAoTWF0aC5hYnMoZXYgLSB0aGlzLmRleFZhbCkgL1xuICAgICAgICAgICAgKHRoaXMudmVydGljYWwuZW5hYmxlZFxuICAgICAgICAgICAgICA/IHRoaXMudmVydGljYWwuaGVpZ2h0XG4gICAgICAgICAgICAgIDogdGhpcy5jYXJvdXNlbFdpZHRoKSkgKlxuICAgICAgICAgIDEwMFxuICAgICAgICA6IHZhbHQ7XG4gICAgdGhpcy5kZXhWYWwgPSBldjtcbiAgICB0aGlzLnRvdWNoLnN3aXBlID0gZTtcbiAgICB0aGlzLl9zZXRUb3VjaFRyYW5zZnJvbShlLCB2YWx0KTtcbiAgICB0aGlzLl9zZXRUcmFuc2Zvcm1Gcm9tVG91Y2goKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFRvdWNoVHJhbnNmcm9tKGU6IHN0cmluZywgdmFsdDogbnVtYmVyKSB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gdGhpcy5SVEwgPyAncGFucmlnaHQnIDogJ3BhbmxlZnQnO1xuICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPVxuICAgICAgZSA9PT0gY29uZGl0aW9uID8gdmFsdCArIHRoaXMudG91Y2hUcmFuc2Zvcm0gOiB0aGlzLnRvdWNoVHJhbnNmb3JtIC0gdmFsdDtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFRyYW5zZm9ybUZyb21Ub3VjaCgpIHtcbiAgICBpZiAodGhpcy50b3VjaFRyYW5zZm9ybSA8IDApIHtcbiAgICAgIHRoaXMudG91Y2hUcmFuc2Zvcm0gPSAwO1xuICAgIH1cbiAgICBjb25zdCB0eXBlID0gdGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScgPyAnJScgOiAncHgnO1xuICAgIHRoaXMuX3NldFN0eWxlKFxuICAgICAgdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxuICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICB0aGlzLnZlcnRpY2FsLmVuYWJsZWRcbiAgICAgICAgPyBgdHJhbnNsYXRlM2QoMCwgJHt0aGlzLmRpcmVjdGlvblN5bX0ke3RoaXMudG91Y2hUcmFuc2Zvcm19JHt0eXBlfSwgMClgXG4gICAgICAgIDogYHRyYW5zbGF0ZTNkKCR7dGhpcy5kaXJlY3Rpb25TeW19JHt0aGlzLnRvdWNoVHJhbnNmb3JtfSR7dHlwZX0sIDAsIDApYFxuICAgICk7XG4gIH1cblxuICAvKiogdGhpcyBmbiB1c2VkIHRvIGRpc2FibGUgdGhlIGludGVydmFsIHdoZW4gaXQgaXMgbm90IG9uIHRoZSB2aWV3cG9ydCAqL1xuICBwcml2YXRlIF9vbldpbmRvd1Njcm9sbGluZygpOiB2b2lkIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmNhcm91c2VsLm9mZnNldFRvcDtcbiAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG4gICAgY29uc3QgaGVpZ2h0dCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCBjYXJvdXNlbEhlaWdodCA9IHRoaXMuY2Fyb3VzZWwub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IGlzQ2Fyb3VzZWxPblNjcmVlbiA9XG4gICAgICB0b3AgPD0gc2Nyb2xsWSArIGhlaWdodHQgLSBjYXJvdXNlbEhlaWdodCAvIDQgJiZcbiAgICAgIHRvcCArIGNhcm91c2VsSGVpZ2h0IC8gMiA+PSBzY3JvbGxZO1xuXG4gICAgaWYgKGlzQ2Fyb3VzZWxPblNjcmVlbikge1xuICAgICAgdGhpcy5faW50ZXJ2YWxDb250cm9sbGVyJC5uZXh0KDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pbnRlcnZhbENvbnRyb2xsZXIkLm5leHQoMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIHN0b3JlIGRhdGEgYmFzZWQgb24gd2lkdGggb2YgdGhlIHNjcmVlbiBmb3IgdGhlIGNhcm91c2VsICovXG4gIHByaXZhdGUgX3N0b3JlQ2Fyb3VzZWxEYXRhKCk6IHZvaWQge1xuICAgIHRoaXMuZGV2aWNlV2lkdGggPSBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpXG4gICAgICA/IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICA6IDEyMDA7XG5cbiAgICB0aGlzLmNhcm91c2VsV2lkdGggPSB0aGlzLmNhcm91c2VsTWFpbjEubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgdGhpcy5kZXZpY2VUeXBlID1cbiAgICAgICAgdGhpcy5kZXZpY2VXaWR0aCA+PSAxMjAwXG4gICAgICAgICAgPyAnbGcnXG4gICAgICAgICAgOiB0aGlzLmRldmljZVdpZHRoID49IDk5MlxuICAgICAgICAgICAgPyAnbWQnXG4gICAgICAgICAgICA6IHRoaXMuZGV2aWNlV2lkdGggPj0gNzY4XG4gICAgICAgICAgICAgID8gJ3NtJ1xuICAgICAgICAgICAgICA6ICd4cyc7XG5cbiAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmlucHV0cy5ncmlkW3RoaXMuZGV2aWNlVHlwZV07XG4gICAgICB0aGlzLml0ZW1XaWR0aCA9IHRoaXMuY2Fyb3VzZWxXaWR0aCAvIHRoaXMuaXRlbXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXRlbXMgPSBNYXRoLnRydW5jKHRoaXMuY2Fyb3VzZWxXaWR0aCAvIHRoaXMuaW5wdXRzLmdyaWQuYWxsKTtcbiAgICAgIHRoaXMuaXRlbVdpZHRoID0gdGhpcy5pbnB1dHMuZ3JpZC5hbGw7XG4gICAgICB0aGlzLmRldmljZVR5cGUgPSAnYWxsJztcbiAgICB9XG5cbiAgICB0aGlzLnNsaWRlSXRlbXMgPSArKHRoaXMuaW5wdXRzLnNsaWRlIDwgdGhpcy5pdGVtc1xuICAgICAgPyB0aGlzLmlucHV0cy5zbGlkZVxuICAgICAgOiB0aGlzLml0ZW1zKTtcbiAgICB0aGlzLmxvYWQgPVxuICAgICAgdGhpcy5pbnB1dHMubG9hZCA+PSB0aGlzLnNsaWRlSXRlbXMgPyB0aGlzLmlucHV0cy5sb2FkIDogdGhpcy5zbGlkZUl0ZW1zO1xuICAgIHRoaXMuc3BlZWQgPVxuICAgICAgdGhpcy5pbnB1dHMuc3BlZWQgJiYgdGhpcy5pbnB1dHMuc3BlZWQgPiAtMSA/IHRoaXMuaW5wdXRzLnNwZWVkIDogNDAwO1xuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnQoKTtcbiAgfVxuXG4gIC8qKiBVc2VkIHRvIHJlc2V0IHRoZSBjYXJvdXNlbCAqL1xuICBwdWJsaWMgcmVzZXQod2l0aE91dEFuaW1hdGlvbj86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB3aXRoT3V0QW5pbWF0aW9uICYmICh0aGlzLndpdGhBbmltID0gZmFsc2UpO1xuICAgIHRoaXMuY2Fyb3VzZWxDc3NOb2RlLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMubW92ZVRvKDApO1xuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnQoKTtcbiAgfVxuXG4gIC8qKiBJbml0IGNhcm91c2VsIHBvaW50ICovXG4gIHByaXZhdGUgX2Nhcm91c2VsUG9pbnQoKTogdm9pZCB7XG4gICAgLy8gZGVidWdnZXI7XG4gICAgLy8gaWYgKHRoaXMudXNlckRhdGEucG9pbnQudmlzaWJsZSA9PT0gdHJ1ZSkge1xuICAgIGNvbnN0IE5vcyA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSAodGhpcy5pdGVtcyAtIHRoaXMuc2xpZGVJdGVtcyk7XG4gICAgdGhpcy5wb2ludEluZGV4ID0gTWF0aC5jZWlsKE5vcyAvIHRoaXMuc2xpZGVJdGVtcyk7XG4gICAgY29uc3QgcG9pbnRlcnMgPSBbXTtcblxuICAgIGlmICh0aGlzLnBvaW50SW5kZXggPiAxIHx8ICF0aGlzLmlucHV0cy5wb2ludC5oaWRlT25TaW5nbGVTbGlkZSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaW50SW5kZXg7IGkrKykge1xuICAgICAgICBwb2ludGVycy5wdXNoKGkpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnBvaW50TnVtYmVycyA9IHBvaW50ZXJzO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9pbnROdW1iZXJzKTtcbiAgICB0aGlzLl9jYXJvdXNlbFBvaW50QWN0aXZlcigpO1xuICAgIGlmICh0aGlzLnBvaW50SW5kZXggPD0gMSkge1xuICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuY3VycmVudFNsaWRlID09PSAwICYmICF0aGlzLmxvb3ApIHtcbiAgICAgICAgdGhpcy5fYnRuQm9vbGVhbigxLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIH1cbiAgfVxuXG4gIC8qKiBjaGFuZ2UgdGhlIGFjdGl2ZSBwb2ludCBpbiBjYXJvdXNlbCAqL1xuICBwcml2YXRlIF9jYXJvdXNlbFBvaW50QWN0aXZlcigpOiB2b2lkIHtcbiAgICBjb25zdCBpID0gTWF0aC5jZWlsKHRoaXMuY3VycmVudFNsaWRlIC8gdGhpcy5zbGlkZUl0ZW1zKTtcbiAgICB0aGlzLmFjdGl2ZVBvaW50ID0gaTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIHRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBzY29sbCB0aGUgY2Fyb3VzZWwgd2hlbiBwb2ludCBpcyBjbGlja2VkICovXG4gIHB1YmxpYyBtb3ZlVG8oc2xpZGU6IG51bWJlciwgd2l0aE91dEFuaW1hdGlvbj86IGJvb2xlYW4pIHtcbiAgICAvLyBzbGlkZSA9IHNsaWRlIC0gMTtcbiAgICB3aXRoT3V0QW5pbWF0aW9uICYmICh0aGlzLndpdGhBbmltID0gZmFsc2UpO1xuICAgIGlmICh0aGlzLmFjdGl2ZVBvaW50ICE9PSBzbGlkZSAmJiBzbGlkZSA8IHRoaXMucG9pbnRJbmRleCkge1xuICAgICAgbGV0IHNsaWRlcmVtYWlucztcbiAgICAgIGNvbnN0IGJ0bnMgPSB0aGlzLmN1cnJlbnRTbGlkZSA8IHNsaWRlID8gMSA6IDA7XG5cbiAgICAgIHN3aXRjaCAoc2xpZGUpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMSwgMCk7XG4gICAgICAgICAgc2xpZGVyZW1haW5zID0gc2xpZGUgKiB0aGlzLnNsaWRlSXRlbXM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgdGhpcy5wb2ludEluZGV4IC0gMTpcbiAgICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xuICAgICAgICAgIHNsaWRlcmVtYWlucyA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLml0ZW1zO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMCk7XG4gICAgICAgICAgc2xpZGVyZW1haW5zID0gc2xpZGUgKiB0aGlzLnNsaWRlSXRlbXM7XG4gICAgICB9XG4gICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbFR3byhidG5zLCBzbGlkZXJlbWFpbnMsIHRoaXMuc3BlZWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBzZXQgdGhlIHN0eWxlIG9mIHRoZSBjYXJvdXNlbCBiYXNlZCB0aGUgaW5wdXRzIGRhdGEgKi9cbiAgcHJpdmF0ZSBfY2Fyb3VzZWxTaXplKCk6IHZvaWQge1xuICAgIHRoaXMudG9rZW4gPSB0aGlzLl9nZW5lcmF0ZUlEKCk7XG4gICAgbGV0IGRpc20gPSAnJztcbiAgICB0aGlzLnN0eWxlaWQgPSBgLiR7XG4gICAgICB0aGlzLnRva2VuXG4gICAgfSA+IC5uZ3VjYXJvdXNlbCA+IC5uZ3UtdG91Y2gtY29udGFpbmVyID4gLm5ndWNhcm91c2VsLWl0ZW1zYDtcblxuICAgIGlmICh0aGlzLmlucHV0cy5jdXN0b20gPT09ICdiYW5uZXInKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmNhcm91c2VsLCAnYmFubmVyJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5wdXRzLmFuaW1hdGlvbiA9PT0gJ2xhenknKSB7XG4gICAgICBkaXNtICs9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7dHJhbnNpdGlvbjogdHJhbnNmb3JtIC42cyBlYXNlO31gO1xuICAgIH1cblxuICAgIGxldCBpdGVtU3R5bGUgPSAnJztcbiAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XG4gICAgICBjb25zdCBpdGVtV2lkdGhfeHMgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXG4gICAgICAgIC5oZWlnaHQgLyArdGhpcy5pbnB1dHMuZ3JpZC54c31weH1gO1xuICAgICAgY29uc3QgaXRlbVdpZHRoX3NtID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtoZWlnaHQ6ICR7dGhpcy52ZXJ0aWNhbFxuICAgICAgICAuaGVpZ2h0IC8gK3RoaXMuaW5wdXRzLmdyaWQuc219cHh9YDtcbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9tZCA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7aGVpZ2h0OiAke3RoaXMudmVydGljYWxcbiAgICAgICAgLmhlaWdodCAvICt0aGlzLmlucHV0cy5ncmlkLm1kfXB4fWA7XG4gICAgICBjb25zdCBpdGVtV2lkdGhfbGcgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2hlaWdodDogJHt0aGlzLnZlcnRpY2FsXG4gICAgICAgIC5oZWlnaHQgLyArdGhpcy5pbnB1dHMuZ3JpZC5sZ31weH1gO1xuXG4gICAgICBpdGVtU3R5bGUgPSBgQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpeyR7aXRlbVdpZHRoX3hzfX1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpeyR7aXRlbVdpZHRoX3NtfX1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6OTkycHgpeyR7aXRlbVdpZHRoX21kfX1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KXske2l0ZW1XaWR0aF9sZ319YDtcbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICBjb25zdCBpdGVtV2lkdGhfeHMgPVxuICAgICAgICB0aGlzLmlucHV0cy50eXBlID09PSAnbW9iaWxlJ1xuICAgICAgICAgID8gYCR7dGhpcy5zdHlsZWlkfSAuaXRlbSB7ZmxleDogMCAwICR7OTUgL1xuICAgICAgICAgICAgICArdGhpcy5pbnB1dHMuZ3JpZC54c30lOyB3aWR0aDogJHs5NSAvICt0aGlzLmlucHV0cy5ncmlkLnhzfSU7fWBcbiAgICAgICAgICA6IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXG4gICAgICAgICAgICAgICt0aGlzLmlucHV0cy5ncmlkLnhzfSU7IHdpZHRoOiAkezEwMCAvICt0aGlzLmlucHV0cy5ncmlkLnhzfSU7fWA7XG5cbiAgICAgIGNvbnN0IGl0ZW1XaWR0aF9zbSA9IGAke3RoaXMuc3R5bGVpZH0gPiAuaXRlbSB7ZmxleDogMCAwICR7MTAwIC9cbiAgICAgICAgK3RoaXMuaW5wdXRzLmdyaWQuc219JTsgd2lkdGg6ICR7MTAwIC8gK3RoaXMuaW5wdXRzLmdyaWQuc219JX1gO1xuICAgICAgY29uc3QgaXRlbVdpZHRoX21kID0gYCR7dGhpcy5zdHlsZWlkfSA+IC5pdGVtIHtmbGV4OiAwIDAgJHsxMDAgL1xuICAgICAgICArdGhpcy5pbnB1dHMuZ3JpZC5tZH0lOyB3aWR0aDogJHsxMDAgLyArdGhpcy5pbnB1dHMuZ3JpZC5tZH0lfWA7XG4gICAgICBjb25zdCBpdGVtV2lkdGhfbGcgPSBgJHt0aGlzLnN0eWxlaWR9ID4gLml0ZW0ge2ZsZXg6IDAgMCAkezEwMCAvXG4gICAgICAgICt0aGlzLmlucHV0cy5ncmlkLmxnfSU7IHdpZHRoOiAkezEwMCAvICt0aGlzLmlucHV0cy5ncmlkLmxnfSV9YDtcblxuICAgICAgaXRlbVN0eWxlID0gYEBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXske2l0ZW1XaWR0aF94c319XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXske2l0ZW1XaWR0aF9zbX19XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjk5MnB4KXske2l0ZW1XaWR0aF9tZH19XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjEyMDBweCl7JHtpdGVtV2lkdGhfbGd9fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW1TdHlsZSA9IGAke3RoaXMuc3R5bGVpZH0gLml0ZW0ge2ZsZXg6IDAgMCAke1xuICAgICAgICB0aGlzLmlucHV0cy5ncmlkLmFsbFxuICAgICAgfXB4OyB3aWR0aDogJHt0aGlzLmlucHV0cy5ncmlkLmFsbH1weDt9YDtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmNhcm91c2VsLCB0aGlzLnRva2VuKTtcbiAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgICAgdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxuICAgICAgICAnbmd1dmVydGljYWwnXG4gICAgICApO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50LFxuICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgYCR7dGhpcy52ZXJ0aWNhbC5oZWlnaHR9cHhgXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxuICAgIHRoaXMuUlRMICYmXG4gICAgICAhdGhpcy52ZXJ0aWNhbC5lbmFibGVkICYmXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmNhcm91c2VsLCAnbmd1cnRsJyk7XG4gICAgdGhpcy5fY3JlYXRlU3R5bGVFbGVtKGAke2Rpc219ICR7aXRlbVN0eWxlfWApO1xuICAgIHRoaXMuX3N0b3JlQ2Fyb3VzZWxEYXRhKCk7XG4gIH1cblxuICAvKiogbG9naWMgdG8gc2Nyb2xsIHRoZSBjYXJvdXNlbCBzdGVwIDEgKi9cbiAgcHJpdmF0ZSBfY2Fyb3VzZWxTY3JvbGxPbmUoQnRuOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgaXRlbVNwZWVkID0gdGhpcy5zcGVlZDtcbiAgICBsZXQgdHJhbnNsYXRlWHZhbCxcbiAgICAgIGN1cnJlbnRTbGlkZSA9IDA7XG4gICAgY29uc3QgdG91Y2hNb3ZlID0gTWF0aC5jZWlsKHRoaXMuZGV4VmFsIC8gdGhpcy5pdGVtV2lkdGgpO1xuICAgIHRoaXMuX3NldFN0eWxlKHRoaXMubmd1SXRlbXNDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICcnKTtcblxuICAgIGlmICh0aGlzLnBvaW50SW5kZXggPT09IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKEJ0biA9PT0gMCAmJiAoKCF0aGlzLmxvb3AgJiYgIXRoaXMuaXNGaXJzdCkgfHwgdGhpcy5sb29wKSkge1xuICAgICAgY29uc3Qgc2xpZGUgPSB0aGlzLnNsaWRlSXRlbXMgKiB0aGlzLnBvaW50SW5kZXg7XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZUQgPSB0aGlzLmN1cnJlbnRTbGlkZSAtIHRoaXMuc2xpZGVJdGVtcztcbiAgICAgIGNvbnN0IE1vdmVTbGlkZSA9IGN1cnJlbnRTbGlkZUQgKyB0aGlzLnNsaWRlSXRlbXM7XG4gICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDEpO1xuICAgICAgaWYgKHRoaXMuY3VycmVudFNsaWRlID09PSAwKSB7XG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLml0ZW1zO1xuICAgICAgICBpdGVtU3BlZWQgPSA0MDA7XG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2xpZGVJdGVtcyA+PSBNb3ZlU2xpZGUpIHtcbiAgICAgICAgY3VycmVudFNsaWRlID0gdHJhbnNsYXRlWHZhbCA9IDA7XG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMSwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xuICAgICAgICBpZiAodG91Y2hNb3ZlID4gdGhpcy5zbGlkZUl0ZW1zKSB7XG4gICAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUgLSB0b3VjaE1vdmU7XG4gICAgICAgICAgaXRlbVNwZWVkID0gMjAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlIC0gdGhpcy5zbGlkZUl0ZW1zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbFR3byhCdG4sIGN1cnJlbnRTbGlkZSwgaXRlbVNwZWVkKTtcbiAgICB9IGVsc2UgaWYgKEJ0biA9PT0gMSAmJiAoKCF0aGlzLmxvb3AgJiYgIXRoaXMuaXNMYXN0KSB8fCB0aGlzLmxvb3ApKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggPD1cbiAgICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZSArIHRoaXMuaXRlbXMgKyB0aGlzLnNsaWRlSXRlbXMgJiZcbiAgICAgICAgIXRoaXMuaXNMYXN0XG4gICAgICApIHtcbiAgICAgICAgY3VycmVudFNsaWRlID0gdGhpcy5kYXRhU291cmNlLmxlbmd0aCAtIHRoaXMuaXRlbXM7XG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMCwgMSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNMYXN0KSB7XG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IHRyYW5zbGF0ZVh2YWwgPSAwO1xuICAgICAgICBpdGVtU3BlZWQgPSA0MDA7XG4gICAgICAgIHRoaXMuX2J0bkJvb2xlYW4oMSwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9idG5Cb29sZWFuKDAsIDApO1xuICAgICAgICBpZiAodG91Y2hNb3ZlID4gdGhpcy5zbGlkZUl0ZW1zKSB7XG4gICAgICAgICAgY3VycmVudFNsaWRlID1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5zbGlkZUl0ZW1zICsgKHRvdWNoTW92ZSAtIHRoaXMuc2xpZGVJdGVtcyk7XG4gICAgICAgICAgaXRlbVNwZWVkID0gMjAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlICsgdGhpcy5zbGlkZUl0ZW1zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9jYXJvdXNlbFNjcm9sbFR3byhCdG4sIGN1cnJlbnRTbGlkZSwgaXRlbVNwZWVkKTtcbiAgICB9XG5cbiAgICAvLyBjdWJpYy1iZXppZXIoMC4xNSwgMS4wNCwgMC41NCwgMS4xMylcbiAgfVxuXG4gIC8qKiBsb2dpYyB0byBzY3JvbGwgdGhlIGNhcm91c2VsIHN0ZXAgMiAqL1xuICBwcml2YXRlIF9jYXJvdXNlbFNjcm9sbFR3byhcbiAgICBCdG46IG51bWJlcixcbiAgICBjdXJyZW50U2xpZGU6IG51bWJlcixcbiAgICBpdGVtU3BlZWQ6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cblxuICAgIGlmICh0aGlzLmRleFZhbCAhPT0gMCkge1xuICAgICAgY29uc3QgdmFsID0gTWF0aC5hYnModGhpcy50b3VjaC52ZWxvY2l0eSk7XG4gICAgICBsZXQgc29tdCA9IE1hdGguZmxvb3IoXG4gICAgICAgICh0aGlzLmRleFZhbCAvIHZhbCAvIHRoaXMuZGV4VmFsKSAqICh0aGlzLmRldmljZVdpZHRoIC0gdGhpcy5kZXhWYWwpXG4gICAgICApO1xuICAgICAgc29tdCA9IHNvbXQgPiBpdGVtU3BlZWQgPyBpdGVtU3BlZWQgOiBzb210O1xuICAgICAgaXRlbVNwZWVkID0gc29tdCA8IDIwMCA/IDIwMCA6IHNvbXQ7XG4gICAgICB0aGlzLmRleFZhbCA9IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLndpdGhBbmltKSB7XG4gICAgICB0aGlzLl9zZXRTdHlsZShcbiAgICAgICAgdGhpcy5uZ3VJdGVtc0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxuICAgICAgICAndHJhbnNpdGlvbicsXG4gICAgICAgIGB0cmFuc2Zvcm0gJHtpdGVtU3BlZWR9bXMgJHt0aGlzLmlucHV0cy5lYXNpbmd9YFxuICAgICAgKTtcbiAgICAgIHRoaXMuaW5wdXRzLmFuaW1hdGlvbiAmJlxuICAgICAgICB0aGlzLl9jYXJvdXNlbEFuaW1hdG9yKFxuICAgICAgICAgIEJ0bixcbiAgICAgICAgICBjdXJyZW50U2xpZGUgKyAxLFxuICAgICAgICAgIGN1cnJlbnRTbGlkZSArIHRoaXMuaXRlbXMsXG4gICAgICAgICAgaXRlbVNwZWVkLFxuICAgICAgICAgIE1hdGguYWJzKHRoaXMuY3VycmVudFNsaWRlIC0gY3VycmVudFNsaWRlKVxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZXRTdHlsZSh0aGlzLm5ndUl0ZW1zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgYGApO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGFTb3VyY2UpO1xuICAgIHRoaXMuaXRlbUxlbmd0aCA9IHRoaXMuZGF0YVNvdXJjZS5sZW5ndGg7XG4gICAgdGhpcy5fdHJhbnNmb3JtU3R5bGUoY3VycmVudFNsaWRlKTtcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IGN1cnJlbnRTbGlkZTtcbiAgICB0aGlzLm9uTW92ZS5lbWl0KHRoaXMpO1xuICAgIHRoaXMuX2Nhcm91c2VsUG9pbnRBY3RpdmVyKCk7XG4gICAgdGhpcy5fY2Fyb3VzZWxMb2FkVHJpZ2dlcigpO1xuICAgIHRoaXMud2l0aEFuaW0gPSB0cnVlO1xuICAgIC8vIGlmIChjdXJyZW50U2xpZGUgPT09IDEyKSB7XG4gICAgLy8gICB0aGlzLl9zd2l0Y2hEYXRhU291cmNlKHRoaXMuZGF0YVNvdXJjZSk7XG4gICAgLy8gfVxuICB9XG5cbiAgLyoqIGJvb2xlYW4gZnVuY3Rpb24gZm9yIG1ha2luZyBpc0ZpcnN0IGFuZCBpc0xhc3QgKi9cbiAgcHJpdmF0ZSBfYnRuQm9vbGVhbihmaXJzdDogbnVtYmVyLCBsYXN0OiBudW1iZXIpIHtcbiAgICB0aGlzLmlzRmlyc3QgPSAhIWZpcnN0O1xuICAgIHRoaXMuaXNMYXN0ID0gISFsYXN0O1xuICB9XG5cbiAgcHJpdmF0ZSBfdHJhbnNmb3JtU3RyaW5nKGdyaWQ6IHN0cmluZywgc2xpZGU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgbGV0IGNvbGxlY3QgPSAnJztcbiAgICBjb2xsZWN0ICs9IGAke3RoaXMuc3R5bGVpZH0geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKGA7XG5cbiAgICBpZiAodGhpcy52ZXJ0aWNhbC5lbmFibGVkKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybVtncmlkXSA9XG4gICAgICAgICh0aGlzLnZlcnRpY2FsLmhlaWdodCAvIHRoaXMuaW5wdXRzLmdyaWRbZ3JpZF0pICogc2xpZGU7XG4gICAgICBjb2xsZWN0ICs9IGAwLCAtJHt0aGlzLnRyYW5zZm9ybVtncmlkXX1weCwgMGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtW2dyaWRdID0gKDEwMCAvIHRoaXMuaW5wdXRzLmdyaWRbZ3JpZF0pICogc2xpZGU7XG4gICAgICBjb2xsZWN0ICs9IGAke3RoaXMuZGlyZWN0aW9uU3ltfSR7dGhpcy50cmFuc2Zvcm1bZ3JpZF19JSwgMCwgMGA7XG4gICAgfVxuICAgIGNvbGxlY3QgKz0gYCk7IH1gO1xuICAgIHJldHVybiBjb2xsZWN0O1xuICB9XG5cbiAgLyoqIHNldCB0aGUgdHJhbnNmb3JtIHN0eWxlIHRvIHNjcm9sbCB0aGUgY2Fyb3VzZWwgICovXG4gIHByaXZhdGUgX3RyYW5zZm9ybVN0eWxlKHNsaWRlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgc2xpZGVDc3MgPSAnJztcbiAgICBpZiAodGhpcy50eXBlID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIHNsaWRlQ3NzID0gYEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKFxuICAgICAgICAneHMnLFxuICAgICAgICBzbGlkZVxuICAgICAgKX19XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHske3RoaXMuX3RyYW5zZm9ybVN0cmluZygnc20nLCBzbGlkZSl9IH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKCdtZCcsIHNsaWRlKX0gfVxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyR7dGhpcy5fdHJhbnNmb3JtU3RyaW5nKCdsZycsIHNsaWRlKX0gfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtLmFsbCA9IHRoaXMuaW5wdXRzLmdyaWQuYWxsICogc2xpZGU7XG4gICAgICBzbGlkZUNzcyA9IGAke3RoaXMuc3R5bGVpZH0geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKCR7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uU3ltXG4gICAgICB9JHt0aGlzLnRyYW5zZm9ybS5hbGx9cHgsIDAsIDApO2A7XG4gICAgfVxuICAgIHRoaXMuY2Fyb3VzZWxDc3NOb2RlLmlubmVySFRNTCA9IHNsaWRlQ3NzO1xuICB9XG5cbiAgLyoqIHRoaXMgd2lsbCB0cmlnZ2VyIHRoZSBjYXJvdXNlbCB0byBsb2FkIHRoZSBpdGVtcyAqL1xuICBwcml2YXRlIF9jYXJvdXNlbExvYWRUcmlnZ2VyKCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgdGhpcy5pbnB1dHMubG9hZCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5sZW5ndGggLSB0aGlzLmxvYWQgPD0gdGhpcy5jdXJyZW50U2xpZGUgKyB0aGlzLml0ZW1zICYmXG4gICAgICAgIHRoaXMuY2Fyb3VzZWxMb2FkLmVtaXQodGhpcy5jdXJyZW50U2xpZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBnZW5lcmF0ZSBDbGFzcyBmb3IgZWFjaCBjYXJvdXNlbCB0byBzZXQgc3BlY2lmaWMgc3R5bGUgKi9cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVJRCgpOiBzdHJpbmcge1xuICAgIGxldCB0ZXh0ID0gJyc7XG4gICAgY29uc3QgcG9zc2libGUgPVxuICAgICAgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICB0ZXh0ICs9IHBvc3NpYmxlLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZS5sZW5ndGgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGBuZ3VjYXJvdXNlbCR7dGV4dH1gO1xuICB9XG5cbiAgLyoqIGhhbmRsZSB0aGUgYXV0byBzbGlkZSAqL1xuICBwcml2YXRlIF9jYXJvdXNlbEludGVydmFsKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY2Fyb3VzZWxNYWluMS5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLmludGVydmFsICYmIHRoaXMubG9vcCkge1xuICAgICAgdGhpcy5saXN0ZW5lcjQgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm9uU2Nyb2xsaW5nKTtcbiAgICAgICAgdGhpcy5vblNjcm9sbGluZyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX29uV2luZG93U2Nyb2xsaW5nKCk7XG4gICAgICAgIH0sIDYwMCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcGxheSQgPSBmcm9tRXZlbnQoY29udGFpbmVyLCAnbW91c2VsZWF2ZScpLnBpcGUobWFwVG8oMSkpO1xuICAgICAgY29uc3QgcGF1c2UkID0gZnJvbUV2ZW50KGNvbnRhaW5lciwgJ21vdXNlZW50ZXInKS5waXBlKG1hcFRvKDApKTtcblxuICAgICAgY29uc3QgdG91Y2hQbGF5JCA9IGZyb21FdmVudChjb250YWluZXIsICd0b3VjaHN0YXJ0JykucGlwZShtYXBUbygxKSk7XG4gICAgICBjb25zdCB0b3VjaFBhdXNlJCA9IGZyb21FdmVudChjb250YWluZXIsICd0b3VjaGVuZCcpLnBpcGUobWFwVG8oMCkpO1xuXG4gICAgICBjb25zdCBpbnRlcnZhbCQgPSBpbnRlcnZhbCh0aGlzLmlucHV0cy5pbnRlcnZhbC50aW1pbmcpLnBpcGUobWFwVG8oMSkpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jYXJvdXNlbEludCA9IG1lcmdlKFxuICAgICAgICAgIHBsYXkkLFxuICAgICAgICAgIHRvdWNoUGxheSQsXG4gICAgICAgICAgcGF1c2UkLFxuICAgICAgICAgIHRvdWNoUGF1c2UkLFxuICAgICAgICAgIHRoaXMuX2ludGVydmFsQ29udHJvbGxlciRcbiAgICAgICAgKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgc3RhcnRXaXRoKDEpLFxuICAgICAgICAgICAgc3dpdGNoTWFwKHZhbCA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuaXNIb3ZlcmVkID0gIXZhbDtcbiAgICAgICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgIHJldHVybiB2YWwgPyBpbnRlcnZhbCQgOiBlbXB0eSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5fY2Fyb3VzZWxTY3JvbGxPbmUoMSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9LCB0aGlzLmludGVydmFsLmluaXRpYWxEZWxheSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlSXRlbUluZGV4Q29udGV4dEFuaSgpIHtcbiAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyO1xuICAgIGZvciAoXG4gICAgICBsZXQgcmVuZGVySW5kZXggPSAwLCBjb3VudCA9IHZpZXdDb250YWluZXIubGVuZ3RoO1xuICAgICAgcmVuZGVySW5kZXggPCBjb3VudDtcbiAgICAgIHJlbmRlckluZGV4KytcbiAgICApIHtcbiAgICAgIGNvbnN0IHZpZXdSZWYgPSB2aWV3Q29udGFpbmVyLmdldChyZW5kZXJJbmRleCkgYXMgYW55O1xuICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XG4gICAgICBjb250ZXh0LmNvdW50ID0gY291bnQ7XG4gICAgICBjb250ZXh0LmZpcnN0ID0gcmVuZGVySW5kZXggPT09IDA7XG4gICAgICBjb250ZXh0Lmxhc3QgPSByZW5kZXJJbmRleCA9PT0gY291bnQgLSAxO1xuICAgICAgY29udGV4dC5ldmVuID0gcmVuZGVySW5kZXggJSAyID09PSAwO1xuICAgICAgY29udGV4dC5vZGQgPSAhY29udGV4dC5ldmVuO1xuICAgICAgY29udGV4dC5pbmRleCA9IHJlbmRlckluZGV4O1xuICAgIH1cbiAgfVxuXG4gIC8qKiBhbmltYXRlIHRoZSBjYXJvdXNlbCBpdGVtcyAqL1xuICBwcml2YXRlIF9jYXJvdXNlbEFuaW1hdG9yKFxuICAgIGRpcmVjdGlvbjogbnVtYmVyLFxuICAgIHN0YXJ0OiBudW1iZXIsXG4gICAgZW5kOiBudW1iZXIsXG4gICAgc3BlZWQ6IG51bWJlcixcbiAgICBsZW5ndGg6IG51bWJlcixcbiAgICB2aWV3Q29udGFpbmVyID0gdGhpcy5fbm9kZU91dGxldC52aWV3Q29udGFpbmVyXG4gICk6IHZvaWQge1xuICAgIGxldCB2YWwgPSBsZW5ndGggPCA1ID8gbGVuZ3RoIDogNTtcbiAgICB2YWwgPSB2YWwgPT09IDEgPyAzIDogdmFsO1xuICAgIGNvbnN0IGNvbGxlY3RJbmRleCA9IFtdO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gMSkge1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0IC0gMTsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgIGNvbGxlY3RJbmRleC5wdXNoKGkpO1xuICAgICAgICB2YWwgPSB2YWwgKiAyO1xuICAgICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQoaSkgYXMgYW55O1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdmlld1JlZi5jb250ZXh0IGFzIGFueTtcbiAgICAgICAgY29udGV4dC5hbmltYXRlID0geyB2YWx1ZTogdHJ1ZSwgcGFyYW1zOiB7IGRpc3RhbmNlOiB2YWwgfSB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gZW5kIC0gMTsgaSA+PSBzdGFydCAtIDE7IGktLSkge1xuICAgICAgICBjb2xsZWN0SW5kZXgucHVzaChpKTtcbiAgICAgICAgdmFsID0gdmFsICogMjtcbiAgICAgICAgY29uc3Qgdmlld1JlZiA9IHZpZXdDb250YWluZXIuZ2V0KGkpIGFzIGFueTtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XG4gICAgICAgIGNvbnRleHQuYW5pbWF0ZSA9IHsgdmFsdWU6IHRydWUsIHBhcmFtczogeyBkaXN0YW5jZTogLXZhbCB9IH07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fcmVtb3ZlQW5pbWF0aW9ucyhjb2xsZWN0SW5kZXgpO1xuICAgIH0sIHNwZWVkICogMC43KTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZUFuaW1hdGlvbnMoaW5kZXhzOiBudW1iZXJbXSkge1xuICAgIGNvbnN0IHZpZXdDb250YWluZXIgPSB0aGlzLl9ub2RlT3V0bGV0LnZpZXdDb250YWluZXI7XG4gICAgaW5kZXhzLmZvckVhY2goaSA9PiB7XG4gICAgICBjb25zdCB2aWV3UmVmID0gdmlld0NvbnRhaW5lci5nZXQoaSkgYXMgYW55O1xuICAgICAgY29uc3QgY29udGV4dCA9IHZpZXdSZWYuY29udGV4dCBhcyBhbnk7XG4gICAgICBjb250ZXh0LmFuaW1hdGUgPSB7IHZhbHVlOiBmYWxzZSwgcGFyYW1zOiB7IGRpc3RhbmNlOiAwIH0gfTtcbiAgICB9KTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBTaG9ydCBmb3JtIGZvciBzZXRFbGVtZW50U3R5bGUgKi9cbiAgcHJpdmF0ZSBfc2V0U3R5bGUoZWw6IGFueSwgcHJvcDogYW55LCB2YWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLCBwcm9wLCB2YWwpO1xuICB9XG5cbiAgLyoqIEZvciBnZW5lcmF0aW5nIHN0eWxlIHRhZyAqL1xuICBwcml2YXRlIF9jcmVhdGVTdHlsZUVsZW0oZGF0YXM/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdHlsZUl0ZW0gPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGlmIChkYXRhcykge1xuICAgICAgY29uc3Qgc3R5bGVUZXh0ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlVGV4dChkYXRhcyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZChzdHlsZUl0ZW0sIHN0eWxlVGV4dCk7XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuY2Fyb3VzZWwsIHN0eWxlSXRlbSk7XG4gICAgcmV0dXJuIHN0eWxlSXRlbTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ25ndS1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgTmd1SXRlbUNvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXRlbScpIGNsYXNzZXMgPSB0cnVlO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ25ndS10aWxlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidGlsZVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2A6aG9zdHtwYWRkaW5nOjEwcHg7Ym94LXNpemluZzpib3JkZXItYm94fS50aWxle2JveC1zaGFkb3c6MCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMil9YF1cbn0pXG5leHBvcnQgY2xhc3MgTmd1VGlsZUNvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXRlbScpIGNsYXNzZXMgPSB0cnVlO1xufVxuIiwiaW1wb3J0IHtcbiAgTmd1Q2Fyb3VzZWxQb2ludERpcmVjdGl2ZSxcbiAgTmd1Q2Fyb3VzZWxJdGVtRGlyZWN0aXZlLFxuICBOZ3VDYXJvdXNlbE5leHREaXJlY3RpdmUsXG4gIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSxcbiAgTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmUsXG4gIE5ndUNhcm91c2VsT3V0bGV0XG59IGZyb20gJy4vbmd1LWNhcm91c2VsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ3VJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3UtaXRlbS9uZ3UtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgSGFtbWVyR2VzdHVyZUNvbmZpZyxcbiAgSEFNTUVSX0dFU1RVUkVfQ09ORklHXG59IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ3VDYXJvdXNlbCB9IGZyb20gJy4vbmd1LWNhcm91c2VsL25ndS1jYXJvdXNlbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd1VGlsZUNvbXBvbmVudCB9IGZyb20gJy4vbmd1LXRpbGUvbmd1LXRpbGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZ3VDYXJvdXNlbCxcbiAgICBOZ3VJdGVtQ29tcG9uZW50LFxuICAgIE5ndVRpbGVDb21wb25lbnQsXG4gICAgTmd1Q2Fyb3VzZWxQb2ludERpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXG4gICAgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLFxuICAgIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbE91dGxldFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ3VDYXJvdXNlbCxcbiAgICBOZ3VJdGVtQ29tcG9uZW50LFxuICAgIE5ndVRpbGVDb21wb25lbnQsXG4gICAgTmd1Q2Fyb3VzZWxQb2ludERpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXG4gICAgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLFxuICAgIE5ndUNhcm91c2VsUHJldkRpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbERlZkRpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbE91dGxldFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5ndUNhcm91c2VsTW9kdWxlIHt9XG4iXSwibmFtZXMiOlsiaW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNFLFlBQ1MsUUFBUSxJQUFJLEtBQUssRUFBRSxFQUNuQixXQUFXLElBQUksUUFBUSxFQUFFLEVBQ3pCQSxXQUEyQixFQUMzQixZQUFZLElBQUksU0FBUyxFQUFFLEVBQzNCLE1BQWtCLEVBQ2xCLFlBQTJCLEVBQzNCLFVBQXVCLEVBQ3ZCLE9BQU8sT0FBTyxFQUNkLFFBQVEsRUFBRSxFQUNWLFFBQVEsQ0FBQyxFQUNULE9BQU8sQ0FBQyxFQUNSLGNBQWMsQ0FBQyxFQUNmLGdCQUFnQixDQUFDLEVBQ2pCLFlBQVksQ0FBQyxFQUNiLGFBQWEsQ0FBQyxFQUNkLGVBQWUsQ0FBQyxFQUNoQixhQUFhLENBQUMsRUFDZCxlQUFlLENBQUMsRUFDaEIsU0FBUyw0QkFBNEIsRUFDckMsUUFBUSxHQUFHLEVBQ1gsT0FBTyxLQUFLLEVBQ1osU0FBUyxDQUFDLEVBQ1YsaUJBQWlCLENBQUMsRUFDbEIsUUFBUSxLQUFLLEVBQ2IsVUFBVSxJQUFJLEVBQ2QsU0FBUyxLQUFLLEVBQ2QsTUFBTSxLQUFLLEVBQ1gsUUFBUSxJQUFJLEVBQ1osV0FBVyxDQUFDO1FBNUJaLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsYUFBUSxHQUFSQSxXQUFRLENBQW1C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