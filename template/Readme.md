node version : v16.15.1

npm version : 8.11.0

java version : 11 [ amazon corretto ]

Packages Installed

[No Config ]

```
npm i react-native-animated-splash-screen react-native-responsive-screen react-native-vector-icons
```

[to Config ]

Android/app/build.gradle

```
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"


// Gif Image 
implementation 'com.facebook.fresco:animated-gif:2.6.0'

//Vector Icons
implementation project(':react-native-vector-icons')


```

Android/settings.gradle

```
include ':react-native-vector-icons'
project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
```

MainApplication.java

```
import com.oblador.vectoricons.VectorIconsPackage;
```
