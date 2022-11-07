import TableHeaderCell from '../TableHeaderCell';
import { Column, SortOrder, TableProps } from '../types';

type TableHeaderProps<T> = Pick<TableProps<T>, 'columns' | 'editable'> & {
  onSortChange: (sortOrder: SortOrder, column: Column<T>) => void;
};

function TableHeader<T>({ columns, onSortChange, editable = false }: TableHeaderProps<T>) {
  return (
    <thead className='bg-slate-700'>
      <tr>
        {columns.map((column, index) => (
          <TableHeaderCell<T>
            key={`headerCell-${index}`}
            column={column}
            onSortChange={onSortChange}
          />
        ))}
        {editable && <th className='p-4 border border-slate-600' />}
      </tr>
    </thead>
  );
}

export default TableHeader;
