import { Directive, TemplateRef, Input } from '@angular/core';
import { HeaderService } from './header.service';

@Directive({
    selector: '[kbmLayoutHeaderTitle]',
    standalone: true
})
export class HeaderDirective {

    constructor(
        readonly tpl: TemplateRef<any>,
        private readonly headerService: HeaderService) {
        this.headerService.headerTitleTpl = tpl;
    }

    ngOnDestroy(): void {
        console.log('DESTROY');
        this.headerService.clear();
    }

}
