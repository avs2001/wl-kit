import { Component, inject } from '@angular/core';
import { ListMetaData } from "./components/list/const";
import { DatePipe } from "@angular/common";
import { SortEvt } from "./components/sort/const";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'kbm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wl-kit';

}
