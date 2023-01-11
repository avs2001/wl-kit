import { SortableKey } from "../list/const";

export type SortDirection = 'asc' | 'desc' | undefined;

export type SortTableEvt = { attr: SortableKey[]; dir: SortDirection };

function sortBy(sortKeys: any, sortDirection: SortDirection = 'asc') {
    return (A: any, B: any) => {
        let a, b, field: any, key, reverse, result = 0;
        for (let i = 0; i < sortKeys.length; i++) {
            result = 0;
            field = sortKeys[i];

            key = typeof field === 'string' ? field : field.name;
            a = typeof A[key] === 'string' ? A[key].toUpperCase() : A[key];
            b = typeof B[key] === 'string' ? B[key].toUpperCase() : B[key];

            if (typeof field.primer !== 'undefined') {
                a = field.primer(a);
                b = field.primer(b);
            }

            reverse = (field.reverse) ? -1 : 1;

            if (a < b) result = reverse * -1;
            if (a > b) result = reverse * 1;
            if (result !== 0) break;
        }
        return sortDirection === 'desc' ? result * -1 : result;
    }
}

export function sort(items: any, sortKeys: string[], sortDirection: SortDirection = 'asc') {
    return items.sort(sortBy(sortKeys, sortDirection));
}