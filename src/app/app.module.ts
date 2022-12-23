import { SearchPipe } from './components/custom-form-inputs/search/search-filter.pipe';
import { SearchDirective } from './components/custom-form-inputs/search/search-filter.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { ListComponent } from "./components/list/list/list.component";
import { SortableComponent } from "./components/sort/sortable/sortable.component";
import { SortDirective } from "./components/sort/sort.directive";
import { SearchInputComponent } from './components/custom-form-inputs/search/search.component';


@NgModule({
  declarations: [
    AppComponent, SearchPipe, SearchDirective
  ],

  imports: [
    BrowserModule,
    ListComponent,
    SortableComponent,
    SortDirective,
    SearchInputComponent,
    ReactiveFormsModule,
  ],

  providers: [
    SearchPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
