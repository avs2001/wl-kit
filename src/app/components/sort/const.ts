export type SortDirection = 'asc' | 'desc' | undefined;

export abstract class Sortable {
  abstract id: string;
}


export type SortEvt = { attr: string; dir: SortDirection };
