import React, { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark(!dark);
  };

  return (
    <DarkModeContext.Provider value={{ dark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};