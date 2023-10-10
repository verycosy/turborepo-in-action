import { useState, ChangeEventHandler } from 'react';

export const useInputText = () => {
  const [text, setText] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const value = evt.target.value ?? '';
    setText(value);
  };

  return { text, onChange };
};
