import { Router } from '@angular/router';
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[kbmActiveRoute]',
    standalone: true
})
export class ActiveRouteDirective {

    @Input() set kbmActiveRoute(routeUrl: string) {
        this.routeUrl = routeUrl;
    }

    routeUrl!: string

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private router: Router
    ) { }

    public ngOnInit(): void {
        this.router.events.subscribe(() => {
            if (this.router.isActive(this.routeUrl, false)) {
                this.renderer.addClass(
                    this.elementRef.nativeElement,
                    'active'
                );
            } else {
                this.renderer.removeClass(
                    this.elementRef.nativeElement,
                    'active'
                );
            }
        });
    }

}