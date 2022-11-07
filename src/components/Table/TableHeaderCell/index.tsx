import { useState } from 'react';

import { Column, SortOrder } from '../types';

import ArrowDown from '../../../icons/ArrowDown';
import ArrowUp from '../../../icons/ArrowUp';

type TableHeaderCellProps<T> = {
  column: Column<T>;
  onSortChange: (sortOrder: SortOrder, column: Column<T>) => void;
};

function TableHeaderCell<T>({ column, onSortChange }: TableHeaderCellProps<T>) {
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.ASC);

  const toggleSortOrder = () => {
    if (sortOrder === SortOrder.ASC) {
      setSortOrder(SortOrder.DSC);
      onSortChange(SortOrder.DSC, column);

      return;
    }

    setSortOrder(SortOrder.ASC);
    onSortChange(SortOrder.ASC, column);
  };

  return (
    <th className='p-4 border border-slate-600 text-slate-300'>
      <button onClick={toggleSortOrder}>
        <div className='flex items-center'>
          {`${column.header[0].toUpperCase()}${column.header.slice(1)}`}
          <span className='flex-none'>
            {sortOrder === SortOrder.ASC ? <ArrowUp /> : <ArrowDown />}
          </span>
        </div>
      </button>
    </th>
  );
}

export default TableHeaderCell;
