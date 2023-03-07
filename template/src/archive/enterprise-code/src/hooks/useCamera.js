import {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
// useCamera: A hook that can be used to take pictures or record videos using the device's camera.
const useCamera = () => {
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    if (status === 'granted') {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (!result.cancelled) {
        setPhoto(result);
      }
    }
  };

  return {photo, takePhoto};
};
