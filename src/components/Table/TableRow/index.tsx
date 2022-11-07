import { Column, TableProps } from '../types';

import EditModal from '../../EditModal';

import ChevronDown from '../../../icons/ChevronDown';
import ChevronRight from '../../../icons/ChevronRight';
import useBooleanState from '../../../hooks/useBooleanState';

export type TableRowProps<T> = Pick<TableProps<T>, 'columns' | 'editable'> & {
  row: T;
  subTableDataKey?: keyof T;
  subTable?: (value: T[keyof T], index: number) => JSX.Element;
  index: number;
  onEditSuccess?: (value: Partial<T>, index: number) => void;
};

function TableRow<T>({
  row,
  columns,
  editable = false,
  subTable,
  subTableDataKey,
  index,
  onEditSuccess,
}: TableRowProps<T>) {
  const [subTableVisible, , , toggleSubTableVisible] = useBooleanState();
  const [isModalOpen, onModalOpen, onModalClose] = useBooleanState();

  const hasSubTable = !!subTableDataKey && !!subTable;

  const onEdit = (newState: Partial<T>) => {
    if (onEditSuccess) {
      onEditSuccess(newState, index);
    }
  };

  const editButton = editable ? (
    <td className='p-4 border border-slate-700 text-slate-400'>
      <button onClick={onModalOpen}>edit</button>
    </td>
  ) : null;

  const editModal = (
    <EditModal<T>
      isModalOpen={isModalOpen}
      onModalClose={onModalClose}
      row={row}
      columns={columns}
      onModalConfirm={onEdit}
    />
  );

  const rowData = (column: Column<T>, idx: number) => (
    <td key={`cell-${idx}`} className='p-4 text-slate-400'>
      <>{row[column.key]}</>
    </td>
  );

  if (hasSubTable) {
    return (
      <>
        <tr className='hover:bg-gray-700 border border-slate-700'>
          <td className='flex items-center p-4 text-slate-400'>
            <button className='mr-2 p-0' onClick={toggleSubTableVisible}>
              {subTableVisible ? <ChevronDown /> : <ChevronRight />}
            </button>
            <>{row[columns[0].key]}</>
          </td>
          {columns.slice(1).map((column, idx) => rowData(column, idx))}
          {editButton}
        </tr>
        {subTableVisible && (
          <tr>
            <td colSpan={columns.length}>{subTable(row[subTableDataKey], index)}</td>
          </tr>
        )}
        {editModal}
      </>
    );
  }

  return (
    <>
      <tr className='hover:bg-gray-700 border border-slate-700'>
        {columns.map((column, idx) => rowData(column, idx))}
        {editButton}
      </tr>
      {editModal}
    </>
  );
}

export default TableRow;
