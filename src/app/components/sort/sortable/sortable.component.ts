import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, HostBinding,
  HostListener,
  Input, OnDestroy,
  OnInit,
  Optional
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Sortable} from "../const";
import {SortDirective} from "../sort.directive";
import {Subscription} from "rxjs";

@Component({
  selector: '[kbm-sortable]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.scss'],
  providers: [
    {provide: Sortable, useExisting: SortableComponent}
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortableComponent implements OnInit, OnDestroy {
  private _subscription: Subscription;
  @Input('kbm-sortable')
  @HostBinding('class.sortable') id!: string;

  constructor(
    @Optional() private readonly _sort: SortDirective,
    private readonly _cdr: ChangeDetectorRef
  ) {
    this._subscription = _sort.stateChanged.subscribe(_ => _cdr.markForCheck());
  }

  get direction() {
    if (this._sort.active === this.id) {
      return this._sort.direction;
    }
    return undefined;
  }

  get isSorted() {
    return this._sort.active === this.id && this._sort.direction !== undefined;
  }

  @HostListener('click')
  click() {
    if (this.id) {
      this._sort.sort(this);
    }
  }

  ngOnInit(): void {
    if (this.id) {
      this._sort.register(this);
    }
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
