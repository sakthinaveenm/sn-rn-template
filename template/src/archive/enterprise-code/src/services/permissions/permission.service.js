import {PermissionsAndroid} from 'react-native';
import CONFIG from '@config';
const {APP_NAME} = CONFIG;

export const requestExternalStoragePermissions = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'READ EXTERNAL STORAGE',
        message: 'I just look into you have EXTERNAL STORAGE',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('External Storage Granted');
      return true;
    } else {
      console.log('External Storage Not Granted');
      return false;
    }
  } catch (err) {
    console.log('External Storage Not Granted');
    console.warn(err);
    return false;
  }
};

export async function isExternalStoragePermissionAllowed() {
  const locationPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  );
  return locationPermission;
}

export async function isLocationPermissionAllowed() {
  const locationPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
  return locationPermission;
}

export async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: `${APP_NAME}`,
        message: `${APP_NAME} Wants to access to your location `,
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
      //   alert('You can use the location');
      return true;
    } else {
      console.log('location permission denied');
      //   alert('Location permission denied');
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
}
