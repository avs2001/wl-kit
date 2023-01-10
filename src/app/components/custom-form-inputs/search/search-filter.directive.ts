import { Directive, Input, OnChanges, EventEmitter, Output, HostListener } from '@angular/core';
import { SearchPipe } from './search-filter.pipe';


@Directive({
  selector: '[appSearch]',
  standalone: true
})
export class SearchDirective {
  @Input() items!: Array<any>;
  @Input() searchFields!: any
  @Output() filterEvent: EventEmitter<any> = new EventEmitter();

  searchTerm!: string;

  @HostListener('keyup', ['$event.target.value']) onKeyUp(value: any) {
    this.searchTerm = value;
    this.applyFilter();
  }

  constructor () {}

  applyFilter = () => {
    this.filterEvent.emit(new SearchPipe().transform(this.items, this.searchTerm, this.searchFields));
  }
}