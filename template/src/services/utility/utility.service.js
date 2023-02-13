import {Platform} from 'react-native';

// Used to Log Output
export const Debug = (...props) => console.log(...props);

// Check if it is Android
export const isAndroid = () => Platform.OS === 'android';

// Check if it is Ios
export const isIOS = () => Platform.OS === 'ios';

// Check if it is Web
export const isWeb = () => Platform.OS === 'web';
