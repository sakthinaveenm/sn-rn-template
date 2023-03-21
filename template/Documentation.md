### Important

Node Version : v18.14.2
npm: '9.5.0'
openjdk 11.0.18 2023-01-17 LTS
OpenJDK Runtime Environment Corretto-11.0.18.10.1 (build 11.0.18+10-LTS)
OpenJDK 64-Bit Server VM Corretto-11.0.18.10.1 (build 11.0.18+10-LTS, mixed mode)
Python 3.11.2

Don't \"Remove/Delete/Move Folders\" from src folder as it was configured on babel-config.js and jsconfig.json

### configuration

#### Android

##### android/settings.gradle

```
//react-native-fs
include ':react-native-fs'
project(':react-native-fs').projectDir = new File(settingsDir, '../node_modules/react-native-fs/android')
include ':react-native-video'
project(':react-native-video').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-video/android-exoplayer')
include ':react-native-vector-icons'
project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
```

##### android/app/build.gradle

```
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

//react-native-fs
implementation project(':react-native-fs')
implementation project(':react-native-video')
implementation "androidx.appcompat:appcompat:1.0.0"
implementation project(':react-native-vector-icons')
```

##### MainActivity.java

```
import android.os.Bundle;
import com.rnfs.RNFSPackage;  // <--- import



//Body of Main Activity
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
```

##### MainApplication.java

```
import com.oblador.vectoricons.VectorIconsPackage;
import com.brentvatne.react.ReactVideoPackage;
```

#### IOS

##### Podfile

target 'templateTests' do above line paste this code

```
pod 'RNFS', :path => '../node_modules/react-native-fs'

```

```
Copy and paste the code in jsconfig , babel.config.js and react-native.config.js
```

```
Syntax :
✅ - Finished
```

| Npm                                       | Android | Ios |
| ----------------------------------------- | ------- | --- |
| react-native-device-info                  | ✅      | ✅  |
| react-native-responsive-screen            | ✅      | ✅  |
| react-native-animated-splash-screen       | ✅      | ✅  |
| react-native-fs                           |         |     |
| react-native-extended-stylesheet          | ✅      | ✅  |
| babel-plugin-module-resolver              | ✅      | ✅  |
| metro-react-native-babel-preset           | ✅      | ✅  |
| @react-native-async-storage/async-storage | ✅      | ✅  |
| react-native-reanimated                   |         |     |
| react-native-video                        |         |     |
| @miblanchard/react-native-slider          |         |     |
| @react-native-firebase/app                |         |     |
| @react-navigation/native                  |         |     |
| react-native-screens                      |         |     |
| react-native-safe-area-context            |         |     |
| nativewind                                |         |     |
| --dev tailwindcss                         |         |     |
| @react-navigation/native-stack            |         |     |

config tailwind css

=>> npx tailwindcss init

// tailwind.config.js

module.exports = {

- content: [],

* content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
  extend: {},
  },
  plugins: [],
  }

// babel.config.js
module.exports = {

- plugins: [],

* plugins: ["nativewind/babel"],
  };
