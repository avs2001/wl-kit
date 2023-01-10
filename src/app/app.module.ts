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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './portal-test/dashboard/dashboard.component';
import { TestComponent } from './portal-test/test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './portal-test/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    ListComponent,
    SortableComponent,
    SortDirective,
    SearchInputComponent,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutComponent, 
    SearchDirective, 
    SearchPipe,
    DashboardComponent,
    TestComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
