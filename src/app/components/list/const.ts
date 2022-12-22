export type Formatter<T> = (data: unknown, context: T) => unknown;

export interface ListMetaData<T> {
  field: string;
  header: string;
  formatter?: Formatter<T>;
  sortable: string;
}




