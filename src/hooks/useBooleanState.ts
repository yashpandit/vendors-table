import { useState } from 'react';

const useModalState = (): [boolean, VoidFunction, VoidFunction, VoidFunction] => {
  const [state, setState] = useState<boolean>(false);

  const setToTrue = () => setState(true);
  const setToFalse = () => setState(false);
  const toggleState = () => setState((prev) => !prev);

  return [state, setToTrue, setToFalse, toggleState];
};

export default useModalState;
