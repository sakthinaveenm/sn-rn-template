import React from 'react';

export const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
