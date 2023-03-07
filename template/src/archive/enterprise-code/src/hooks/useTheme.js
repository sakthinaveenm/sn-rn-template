import React, {createContext, useState, useContext} from 'react';
import Theme from '@constants/themes';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, changeTheme] = useState(Theme[0]);
  return (
    <ThemeContext.Provider value={{theme, changeTheme, allThemes: Theme}}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const data = useContext(ThemeContext);
  const {theme, changeTheme, allThemes} = data;
  return {
    theme,
    changeTheme,
    allThemes,
  };
};

export default useTheme;
