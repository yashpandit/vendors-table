import { ChangeEvent, useState } from 'react';

import Input from '../Input';
import Modal from '../Modal';
import ModalContent from '../Modal/ModalContent';
import ModalFooter from '../Modal/ModalFooter';
import { Column } from '../Table/types';

type EditModalProps<T> = {
  row: T;
  columns: Column<T>[];
  isModalOpen: boolean;
  onModalClose: VoidFunction;
  onModalConfirm: (value: Partial<T>) => void;
};

function EditModal<T>({
  row,
  columns,
  isModalOpen,
  onModalClose,
  onModalConfirm,
}: EditModalProps<T>) {
  const [state, setState] = useState<Partial<T>>({});

  const onEditColumn = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value, valueAsNumber } = e.target;

    setState((prev) => ({
      ...prev,
      [id]: Number.isNaN(valueAsNumber) ? value : valueAsNumber,
    }));
  };

  const onEdit = () => {
    onModalConfirm(state);
    onModalClose();
  };

  return (
    <Modal isOpen={isModalOpen}>
      <ModalContent>
        {columns.map((column) => {
          return (
            <div key={`input-${column.key.toString()}`} className='w-full p-2 flex flex-col gap-2'>
              <Input
                label={column.header}
                id={column.key.toString()}
                defaultValue={row[column.key] as string | number}
                onChange={onEditColumn}
              />
            </div>
          );
        })}
      </ModalContent>
      <ModalFooter>
        <button
          type='button'
          className='inline-flex w-full justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          type='button'
          className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-gray-400 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
          onClick={onModalClose}
        >
          Cancel
        </button>
      </ModalFooter>
    </Modal>
  );
}

export default EditModal;
