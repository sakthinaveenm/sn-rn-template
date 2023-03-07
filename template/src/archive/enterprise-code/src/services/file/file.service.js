// In-built Libraries
import {NativeModules} from 'react-native';

// External Libraries
const RNFS = require('react-native-fs');

exports.readFile = ex_sdcard => {
  RNFS.readDir(ex_sdcard) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    .then(result => {
      console.log(`GOT RESULT FROM ${ex_sdcard} - path`);
      console.log(result);

      // stat the first file
      return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    })
    .then(statResult => {
      if (statResult[0].isFile()) {
        // if we have a file, read it
        return RNFS.readFile(statResult[1], 'utf8');
      }
      return 'no file';
    })
    .then(contents => {
      return JSON.parse(contents);
    })
    .catch(err => {
      console.log(err.message, err.code);
    });
};

exports.makeDir = (absolutePath, data) => {
  RNFS.mkdir(absolutePath)
    .then(result => {
      console.log(absolutePath, 'Folder Created suvcccesfuly');
      RNFS.writeFile(
        `${absolutePath}/Bio-Bontany.json`,
        JSON.stringify(data),
        'utf8',
      )
        .then(success => {
          console.log('FILE WRITTEN!', success);
        })
        .catch(err => {
          console.log(err.message);
        });
    })
    .catch(err => {
      console.log(err.message, err.code);
    });
};

export const _fetchSd = async () => {
  const _paths = path => {
    let paths = [];
    let storagePaths = JSON.parse(path);
    for (let index = 0; index < storagePaths.length; index++) {
      const element = storagePaths[index];
      paths.push({
        name: element.split('/').pop(),
        path: `/storage/${element.split('/').pop()}`,
      });
    }
    console.log(paths);
  };

  NativeModules.Device.getExternalSdCardPath((err, paths) => {
    if (err) {
      console.log('Error, to fetch ');
    }
    if (paths) {
      _paths(paths);
    }
  });
  NativeModules.Device.getDeviceMacAddress((err, mac) => {
    if (err) {
      console.log('Error, to fetch ');
    }
    if (mac) {
      console.log('Mac Address', mac);
      //   setMacAddress(mac);
    }
  });
  NativeModules.Device.getDeviceName((err, name) => {
    if (err) {
      console.log('Error, to fetch device name');
    }
    if (name) {
      console.log('Device Name', name);
      //   setDname(name);
    }
  });
};
