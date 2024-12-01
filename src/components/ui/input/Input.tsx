import './Input.pcss';
import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  value: string;
  type: HTMLInputTypeAttribute;
  register: UseFormRegisterReturn;
  defaultChecked?: boolean;
}

export const Input = ({
  value,
  type,
  register,
  defaultChecked,
}: InputProps) => {
  return (
    <input
      className="input text-r18-140"
      value={value}
      type={type}
      {...register}
      defaultChecked={defaultChecked}
    />
  );
};
