import { Column, SortOrder } from '../types';

const sortTableData =
  <T>(sortOrder: SortOrder, column: Column<T>) =>
  (a: T, b: T) => {
    const valueA = a[column.key];
    const valueB = b[column.key];

    if (
      typeof valueA === 'number' &&
      typeof valueB === 'number' &&
      Number.isSafeInteger(valueA) &&
      Number.isSafeInteger(valueB)
    ) {
      return sortOrder === SortOrder.ASC ? valueA - valueB : valueB - valueA;
    }

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return sortOrder === SortOrder.ASC
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    return 0;
  };

export default sortTableData;
