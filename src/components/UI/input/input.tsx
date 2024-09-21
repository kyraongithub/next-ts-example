import React from 'react';
import { InputProps } from './input.interface';

const Input = (props: InputProps) => {
  const { type = 'text' } = props;
  return (
    <>{type === 'textarea' ? <textarea {...props} /> : <input {...props} />}</>
  );
};

export default Input;
