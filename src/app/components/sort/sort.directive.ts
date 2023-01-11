import { SortDirection, SortTableEvt } from './sort.utils';
import { Directive, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Sortable } from "./const";
import { Subject } from "rxjs";
import { SortableKey } from '../list/const';

@Directive({
  selector: '[kbmSort]',
  standalone: true,
})
export class SortDirective implements OnDestroy {

  @Output() readonly kbmSort: EventEmitter<SortTableEvt> = new EventEmitter<SortTableEvt>();

  active!: SortableKey[];
  direction: SortDirection = undefined;
  sortables = new Map<string, Sortable>();
  stateChanged = new Subject<void>();

  sort(sortable: Sortable) {
    if (this.active !== sortable.sortableKeys) {
      this.active = sortable.sortableKeys;
      this.direction = 'asc';
    } else {
      this.direction = this.direction === undefined ? 'asc' : (this.direction === 'desc' ? undefined : 'desc');
    }
    this.kbmSort.next({ attr: this.active, dir: this.direction });
    this.stateChanged.next();
  }

  ngOnDestroy(): void {
    this.stateChanged.complete();
  }

}
