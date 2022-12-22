import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListMetaData} from "../const";
import {CdkTableModule} from "@angular/cdk/table";
import {ListFormatterPipe} from "../list-formatter.pipe";

@Component({
  selector: 'kbm-list',
  standalone: true,
  imports: [CommonModule, CdkTableModule, ListFormatterPipe],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent<T> {

  @Input()
  data: ReadonlyArray<T> = [];

  @Input()
  metadata: ReadonlyArray<ListMetaData<T>> = [];

  get fields() {
    return this.metadata.map(({field}) => field)
  }
}
