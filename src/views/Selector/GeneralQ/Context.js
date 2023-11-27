import React, { createContext, useState } from 'react';

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const [inputValues, setInputValues] = useState({});

  const updateInputValue = (name, value) => {
    setInputValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  return (
    <InputContext.Provider value={{ inputValues, updateInputValue }}>
      {children}
    </InputContext.Provider>
  );
};
