export type Formatter<T> = (data: unknown, context: T) => unknown;
export type SortableKey = number | string | { name: string, reverse: boolean };

export interface ListMetaData<T> {
  field: string;
  header: string;
  formatter?: Formatter<T>;
  sortableKeys?: SortableKey[];
}




