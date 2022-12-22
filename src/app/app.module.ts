import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ListComponent} from "./components/list/list/list.component";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        ListComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
