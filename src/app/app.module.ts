import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {ListComponent} from "./components/list/list/list.component";
import {SortableComponent} from "./components/sort/sortable/sortable.component";
import {SortDirective} from "./components/sort/sort.directive";
import { SearchInputComponent } from './components/custom-form-inputs/search/search.component';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    ListComponent,
    SortableComponent,
    SortDirective,
    SearchInputComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
