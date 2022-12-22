import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListMetaData} from "../const";
import {CdkTableModule} from "@angular/cdk/table";
import {ListFormatterPipe} from "../list-formatter.pipe";
import {SortableComponent} from "../../sort/sortable/sortable.component";
import {SortDirective} from "../../sort/sort.directive";
import {SortEvt} from "../../sort/const";

@Component({
  selector: 'kbm-list',
  standalone: true,
  imports: [CommonModule, CdkTableModule, ListFormatterPipe, SortDirective, SortableComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent<T> {

  @Input()
  data: ReadonlyArray<T> = [];

  @Input()
  metadata: ReadonlyArray<ListMetaData<T>> = [];

  @Output() readonly sort: EventEmitter<SortEvt> = new EventEmitter<SortEvt>();

  get fields() {
    return this.metadata.map(({field}) => field)
  }
}
