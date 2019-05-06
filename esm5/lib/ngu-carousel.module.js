/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NguCarouselPointDirective, NguCarouselItemDirective, NguCarouselNextDirective, NguCarouselPrevDirective, NguCarouselDefDirective, NguCarouselOutlet } from './ngu-carousel.directive';
import { NguItemComponent } from './ngu-item/ngu-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarousel } from './ngu-carousel/ngu-carousel.component';
import { NguTileComponent } from './ngu-tile/ngu-tile.component';
var NguCarouselModule = /** @class */ (function () {
    function NguCarouselModule() {
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
    return NguCarouselModule;
}());
export { NguCarouselModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd1LWNhcm91c2VsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3UvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJsaWIvbmd1LWNhcm91c2VsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHlCQUF5QixFQUN6Qix3QkFBd0IsRUFDeEIsd0JBQXdCLEVBQ3hCLHdCQUF3QixFQUN4Qix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2xCLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFLakUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRWpFO0lBQUE7SUF5QmdDLENBQUM7O2dCQXpCaEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFO3dCQUNQLFdBQVc7d0JBQ1gsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLHlCQUF5Qjt3QkFDekIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3dCQUN2QixpQkFBaUI7cUJBQ2xCO29CQUNELFlBQVksRUFBRTt3QkFDWixXQUFXO3dCQUNYLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQix5QkFBeUI7d0JBQ3pCLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLHVCQUF1Qjt3QkFDdkIsaUJBQWlCO3FCQUNsQjtpQkFDRjs7SUFDK0Isd0JBQUM7Q0FBQSxBQXpCakMsSUF5QmlDO1NBQXBCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUsXG4gIE5ndUNhcm91c2VsSXRlbURpcmVjdGl2ZSxcbiAgTmd1Q2Fyb3VzZWxOZXh0RGlyZWN0aXZlLFxuICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsXG4gIE5ndUNhcm91c2VsRGVmRGlyZWN0aXZlLFxuICBOZ3VDYXJvdXNlbE91dGxldFxufSBmcm9tICcuL25ndS1jYXJvdXNlbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTmd1SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbmd1LWl0ZW0vbmd1LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7XG4gIEhhbW1lckdlc3R1cmVDb25maWcsXG4gIEhBTU1FUl9HRVNUVVJFX0NPTkZJR1xufSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmd1Q2Fyb3VzZWwgfSBmcm9tICcuL25ndS1jYXJvdXNlbC9uZ3UtY2Fyb3VzZWwuY29tcG9uZW50JztcbmltcG9ydCB7IE5ndVRpbGVDb21wb25lbnQgfSBmcm9tICcuL25ndS10aWxlL25ndS10aWxlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbXG4gICAgTmd1Q2Fyb3VzZWwsXG4gICAgTmd1SXRlbUNvbXBvbmVudCxcbiAgICBOZ3VUaWxlQ29tcG9uZW50LFxuICAgIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUsXG4gICAgTmd1Q2Fyb3VzZWxJdGVtRGlyZWN0aXZlLFxuICAgIE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsXG4gICAgTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmUsXG4gICAgTmd1Q2Fyb3VzZWxPdXRsZXRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmd1Q2Fyb3VzZWwsXG4gICAgTmd1SXRlbUNvbXBvbmVudCxcbiAgICBOZ3VUaWxlQ29tcG9uZW50LFxuICAgIE5ndUNhcm91c2VsUG9pbnREaXJlY3RpdmUsXG4gICAgTmd1Q2Fyb3VzZWxJdGVtRGlyZWN0aXZlLFxuICAgIE5ndUNhcm91c2VsTmV4dERpcmVjdGl2ZSxcbiAgICBOZ3VDYXJvdXNlbFByZXZEaXJlY3RpdmUsXG4gICAgTmd1Q2Fyb3VzZWxEZWZEaXJlY3RpdmUsXG4gICAgTmd1Q2Fyb3VzZWxPdXRsZXRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3VDYXJvdXNlbE1vZHVsZSB7fVxuIl19