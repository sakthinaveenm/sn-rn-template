import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import Orientation from 'react-native-orientation';

//  Configuration needed
/*

in android/build.gradle
change compile "com.facebook.react:react-native:+" => implementation "com.facebook.react:react-native:+"

in android/app/build.gradle
in dependencies add => implementation project(':react-native-orientation')

in Main Application.java
add import com.github.yamill.orientation.OrientationPackage;

in MainActivity.java
add these two Lines :
import android.content.Intent; // <--- import
import android.content.res.Configuration; // <--- import

in Settings.gradle
include ':react-native-orientation', ':app'
project(':react-native-orientation').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-orientation/android')


*/

export const ORIENTATION = {
  PORTRAIT: 'portrait',
  LANDSCAPE: 'landscape',
};

// useDeviceOrientation: A hook that can be used to detect the device's screen orientation.
const useDeviceOrientation = () => {
  const [orientation, setOrientation] = useState(
    Dimensions.get('screen').width > Dimensions.get('screen').height
      ? 'landscape'
      : 'portrait',
  );

  useEffect(() => {
    const onChange = ({screen}) => {
      setOrientation(screen.width > screen.height ? 'landscape' : 'portrait');
    };
    Dimensions.addEventListener('change', onChange);
    return () => {
      try {
        Dimensions.removeEventListener('change', onChange);
      } catch (err) {}
    };
  }, []);

  const getOrientationState = () => {
    return orientation;
  };

  const lockPotraitState = () => {
    Orientation.lockToPortrait();
  };

  const lockLandscapeState = () => {
    Orientation.lockToLandscape();
  };

  const unlockAllOrientations = () => {
    Orientation.unlockAllOrientations();
  };

  return {
    getOrientationState,
    lockPotraitState,
    lockLandscapeState,
    unlockAllOrientations,
  };
};

export default useDeviceOrientation;
