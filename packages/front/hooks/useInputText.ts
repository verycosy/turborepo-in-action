import { useState, ChangeEventHandler } from 'react';

export const useInputText = () => {
  const [text, setText] = useState('');

  const onChange: ChangeEventHandler = (evt) => {
    const value = evt.target.textContent ?? '';
    setText(value);
  };

  return { text, onChange };
};
