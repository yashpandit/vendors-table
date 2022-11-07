import { InputHTMLAttributes } from 'react';

type InputBaseProps = InputHTMLAttributes<HTMLInputElement>;

type InputProps = {
  label: string;
} & InputBaseProps;

function Input(props: InputProps) {
  const { label, ...inputProps } = props;

  return (
    <>
      <label htmlFor={inputProps.id}>{label}</label>
      <input className='border rounded p-2 bg-slate-500' {...inputProps} />
    </>
  );
}

export default Input;
