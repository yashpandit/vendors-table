import { PropsWithChildren } from 'react';

function ModalFooter({ children }: PropsWithChildren<{}>) {
  return (
    <div className='bg-slate-500 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>{children}</div>
  );
}

export default ModalFooter;
