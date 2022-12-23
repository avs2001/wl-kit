import { CommonModule } from '@angular/common';
import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

import { ReplaySubject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'kbm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchInputComponent),
      multi: true
    }
  ]
})
export class SearchInputComponent implements ControlValueAccessor, OnInit {
  @Input() co!: any

  onChange: any;
  onTouch: any;
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  // Step 1: Define what should happen in this component, if something changes outside
  writeValue(input: string) {
    this.input.next(input);
  }

  // Step 2: Handle what should happen on the outside, if something changes on the inside
  input = new ReplaySubject(1);
  onInputChange(input: string) {
    this.input.next(input);
  }
  subscriptions: Subscription[] = [];
  ngOnInit() {
    console.log(this.co);
    this.subscriptions.push(
      this.input
        .pipe(
          debounceTime(0)
        )
        .subscribe(input => {
          this.onChange(input);
        })
    )
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}