import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {
    transform(items: Array<any>, term: string, searchFields: string[]): Array<any> {
        if (!term || term === '') {
            return items
        } else {
            return items.filter(item => {
                return Object.entries(item).filter(item => searchFields.includes(item[0]))
                    .reduce((prev, curr) => {
                        return prev || curr!.toString().toLowerCase().includes(term.toLowerCase())
                    }, false)
            });
        }
    }
}