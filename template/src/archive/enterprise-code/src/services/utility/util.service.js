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

// Check if it is Android
export const isAndroid = () => Platform.OS === 'android';

//Check if it is IOS
export const isIOS = () => Platform.OS === 'ios';

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
