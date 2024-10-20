import className from 'classnames';
import './Button.pcss';

interface IButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
}

export default function Button({
  children,
  primary,
  secondary,
  onClick,
}: IButtonProps) {
  const classes = className('button', {
    'button--primary': primary,
    'button--secondary': secondary,
  });

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
