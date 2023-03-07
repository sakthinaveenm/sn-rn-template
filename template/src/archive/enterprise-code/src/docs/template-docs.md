Install all Npm packages in Readme.md

### **For Android**

**MainApplication.java**

import com.oblador.vectoricons.VectorIconsPackage;

import com.github.yamill.orientation.OrientationPackage;

import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage; // <--- import

**MainActivity.java**

import android.content.Intent; // <--- import

import android.content.res.Configuration; // <--- import

Settings.gradle

```
include ':react-native-orientation', ':app'
project(':react-native-orientation').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-orientation/android')
include ':react-native-vector-icons'
project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
include ':react-native-localization', ':app'
project(':react-native-localization').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-localization/android')
include ':react-native-splash-screen'   
project(':react-native-splash-screen').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-splash-screen/android')

```

AndroidManifest.xml

```
<uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

in app/build.gradle

`apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"`

`  // compile project(':react-native-orientation')     implementation project(':react-native-orientation')     implementation project(':react-native-localization')     implementation project(':react-native-vector-icons')`
