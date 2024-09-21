import React from 'react';
import { ButtonProps } from './button.interface';

const Button = (props: ButtonProps) => {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
