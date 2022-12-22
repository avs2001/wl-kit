import {Pipe, PipeTransform} from '@angular/core';
import {Formatter} from "./const";

@Pipe({
  name: 'listFormatter',
  standalone: true
})
export class ListFormatterPipe implements PipeTransform {

  transform<T>(value: unknown, context: T, formatterFn?: Formatter<T>): unknown {
    if (formatterFn) {
      return formatterFn(value, context);
    }
    return value;
  }

}
