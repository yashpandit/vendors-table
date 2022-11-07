import { PropsWithChildren } from 'react';

type ModalProps = {
  isOpen: boolean;
};

function Modal({ isOpen, children }: PropsWithChildren<ModalProps>) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className='relative z-10' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-slate-400 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
