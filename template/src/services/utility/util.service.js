// In-buildPackages
import {Platform, Dimensions, ToastAndroid, PixelRatio} from 'react-native';
// External Packages
import {useIsFocused as IsScreenFocused} from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';

export const isTablet = DeviceInfo.isTablet();

const RNFS = require('react-native-fs');

import AsyncStorage from '@react-native-async-storage/async-storage';

export const isValidPhoneNo = phoneNo => {
  const phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return phoneNumberPattern.test(phoneNo);
};

export const isValidEmail = email => {
  const format =
    /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return format.test(email);
};

export const isValidUserName = email => {
  const format = /^[0-9a-zA-Z_]{5,}$/;
  return format.test(email);
};

export const isEmpty = text => {
  return text.toString().trim().length > 0 && text.toString().trim() !== '0';
};

export const validatePhoneNumber = phoneNumber => /^\d{10}$/.test(phoneNumber);

export const configureUrl = url => {
  let authUrl = url;
  if (url && url[url.length - 1] === '/') {
    authUrl = url.substring(0, url.length - 1);
  }
  return authUrl;
};

export const getErrorMessage = error => {
  if (error && error.response && error.response.data && error.response.data) {
    if (error.response.data.errors) {
      return error.response.data.errors.join('\n');
    }
    if (error.response.data.message) {
      return error.response.data.message;
    }
  }
  if (error && error.message) {
    return error.message;
  }
  return 'Something went wrong!';
};

// Async Storage Set Single String Value
export const setItemInStorage = async (key, data) => {
  try {
    return await AsyncStorage.setItem(key, data);
  } catch (error) {
    return null;
  }
};

export const getItemFromStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      return value;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const removeStoreItem = async key => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    return null;
  }
};

export const setObjectInStore = async (key, data) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    return null;
  }
};

export const getObjectFromStore = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const storeMultiDelete = async keyArray => {
  try {
    return await AsyncStorage.multiRemove(keyArray);
  } catch (error) {
    return null;
  }
};

export const clearStorage = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (error) {
    return null;
  }
};

// Used to Log Output
export const Debug = (...props) => console.log(...props);

// Check if it is Android
export const isAndroid = () => Platform.OS === 'android';

// Check if it is Ios
export const isIOS = () => Platform.OS === 'ios';

// Check if it is Web
export const isWeb = () => Platform.OS === 'web';

// In-buildPackages
import {Platform, Dimensions, ToastAndroid, PixelRatio} from 'react-native';

// External Packages
import {useIsFocused as IsScreenFocused} from '@react-navigation/native';
const RNFS = require('react-native-fs');

// Download Url On Background
export const backgroundDownloadFile = async (
  url,
  pathtoDownload = RNFS.ExternalDirectoryPath,
  fileName,
) => {
  await RNFS.downloadFile({
    fromUrl: url,
    toFile: pathtoDownload + '/' + 'Dummy' + '.mp4',
    background: true,
  }).promise.then(r => {
    console.log('done');
  });
};

// Returns true if the screen is in portrait mode
export const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

//  Returns true of the screen is in landscape mode
export const isLandscape = () => {
  const dim = Dimensions.get('screen');
  return dim.width >= dim.height;
};

// useIsFocused: A hook that can be used to determine if a screen is currently focused
export const useIsFocused = navigation => {
  const isFocused = IsScreenFocused();
  return isFocused;
};

// getPixelRatio: A utility function that can be used to get the device's pixel ratio
export const getPixelRatio = () => {
  return PixelRatio.get();
};

// isIphoneX: A utility function that can be used to determine if the device is an iPhone X or later
export const isIphoneX = () => {
  const {height, width} = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812)
  );
};

export const showToast = ({message}) => {
  if (isAndroid()) {
    ToastAndroid.show(message ?? 'Something Went Wrong!', ToastAndroid.SHORT);
  }
};

export const showToastWithGravity = ({message}) => {
  ToastAndroid.showWithGravity(
    message ?? 'Something Went Wrong!',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );
};

export const showToastWithGravityAndOffset = ({message}) => {
  ToastAndroid.showWithGravityAndOffset(
    message ?? 'Something Went Wrong!',
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
    25,
    50,
  );
};

// Get Dynamic Color
export const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
