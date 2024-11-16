import React from 'react';
import className from 'classnames';
import './Button.pcss';

interface IButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  type?: 'reset' | 'button' | 'submit';
}

export const Button = ({
  children,
  primary,
  secondary,
  onClick,
  type = 'button',
}: IButtonProps) => {
  const classes = className('button', {
    'button--primary': primary,
    'button--secondary': secondary,
  });

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
