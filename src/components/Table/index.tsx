import { PropsWithChildren } from 'react';

function Table({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`overflow-auto ${className}`}>
      <table className='table-fixed border-collpase'>{children}</table>
    </div>
  );
}

export default Table;
