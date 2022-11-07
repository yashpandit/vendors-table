export type Column<T> = {
  key: keyof T;
  header: string;
  width?: number;
};

export type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
  editable?: boolean;
};

export enum SortOrder {
  ASC = 'asc',
  DSC = 'dsc',
}

export default null;
