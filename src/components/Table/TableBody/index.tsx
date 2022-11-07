import TableRow, { TableRowProps } from '../TableRow';

type TableBodyProps<T> = Omit<TableRowProps<T>, 'row' | 'index'> & {
  data: T[];
};

function TableBody<T>(props: TableBodyProps<T>) {
  const { data, ...rest } = props;

  return (
    <tbody>
      {data.map((row, index) => (
        <TableRow<typeof row> key={`row-${index}`} {...rest} index={index} row={row} />
      ))}
    </tbody>
  );
}

export default TableBody;
