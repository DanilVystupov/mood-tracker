import './Textarea.pcss';
import { UseFormRegisterReturn } from 'react-hook-form';

interface ITextareaProps {
  rows?: number;
  maxLength?: number;
  placeholder?: string;
  register: UseFormRegisterReturn;
  spellCheck?: boolean;
  lang?: string;
}

export const Textarea = ({
  rows = 5,
  maxLength = 255,
  spellCheck = true,
  lang = 'ru',
  placeholder = 'Введите текст...',
  register,
}: ITextareaProps) => {
  return (
    <textarea
      className="textarea text-r18-140"
      {...register}
      spellCheck={spellCheck}
      lang={lang}
      rows={rows}
      maxLength={maxLength}
      placeholder={placeholder}
    ></textarea>
  );
};
