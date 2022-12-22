import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SortableComponent} from "./components/sort/sortable/sortable.component";
import {SortDirective} from "./components/sort/sort.directive";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SortableComponent,
    SortDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
