import React, { createContext, useContext, useState } from 'react';
import { light, dark } from './themes'; // Импортируйте ваши темы

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(light); // Устанавливаем тему по умолчанию

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === light ? dark : light));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);