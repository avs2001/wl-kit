import {Injectable, TemplateRef} from '@angular/core';
import {ReplaySubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class HeaderService {
    headerTitleTplRef = new ReplaySubject<TemplateRef<any> | null>();
    headerTitleTpl$ = this.headerTitleTplRef.asObservable();

    set headerTitleTpl(template: TemplateRef<any>) {
        this.headerTitleTplRef.next(template);
    }

    clear(): void {
        this.headerTitleTplRef.next(null);
    }
}