export {default} from './theme';

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import React, { useState } from 'react';
// import { createContext } from 'react';
// import ThemeCollection from './theme';

// // constants
// const THEMES = 'THEMES';

// export const ThemeContext = createContext();

// const ThemeProvider = ({ children }) => {
//   const [Theme, setTheme] = useState(ThemeCollection[0]);

//   const changeTheme = (theme) => {
//     const isThemeAvailable = ThemeCollection.find((x) => x.name === theme.name);
//     if (isThemeAvailable) {
//       setTheme(isThemeAvailable);
//       const stringyfiedTheme = JSON.stringify(isThemeAvailable);
//       AsyncStorage.setItem(THEMES, stringyfiedTheme);
//     }
//   };

//   const checkUserChangedTheme = async () => {
//     const isUserChangedTheme = await AsyncStorage.getItem(THEMES);
//     if (isUserChangedTheme) {
//       const parseUserChangedTheme = JSON.parse(isUserChangedTheme);
//       const isThemeAvailable = ThemeCollection.find((x) => x.name === parseUserChangedTheme.name);
//       if (isThemeAvailable) {
//         setTheme(isThemeAvailable);
//       }
//     }
//   };

//   return (
//     <ThemeContext.Provider value={{ Theme, changeTheme, checkUserChangedTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeProvider;
