import { NgModule } from '@angular/core';
import { SearchDirective } from "./search-filter.directive";
import { SearchPipe } from "./search-filter.pipe";
import { SearchInputComponent } from "./search.component";

@NgModule({
    imports: [
        SearchDirective,
        SearchPipe,
        SearchInputComponent
    ],
    exports: [
        SearchDirective,
        SearchPipe,
        SearchInputComponent
    ]
})
export class SearchInputModule {
}
