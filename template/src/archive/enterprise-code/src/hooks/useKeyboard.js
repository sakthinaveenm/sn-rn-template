import {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';

const useKeyboard = () => {
  const [keyboard, setKeyboard] = useState({});

  useEffect(() => {
    const onShow = e => setKeyboard(e.endCoordinates);
    const onHide = () => setKeyboard({});
    Keyboard.addListener('keyboardDidShow', onShow);
    Keyboard.addListener('keyboardDidHide', onHide);
    return () => {
      Keyboard.removeListener('keyboardDidShow', onShow);
      Keyboard.removeListener('keyboardDidHide', onHide);
    };
  }, []);

  return keyboard;
};

// useKeyboard: A hook that can be used to track the keyboard visibility and dimensions.

// import { useState, useEffect } from 'react';
// import { Keyboard } from 'react-native';

// const useKeyboard = () => {
//   const [keyboardHeight, setKeyboardHeight] = useState(0);
//   const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

//   useEffect(() => {
//     const keyboardDidShow = Keyboard.addListener('keyboardDidShow', event => {
//       setKeyboardHeight(event.endCoordinates.height);
//       setIsKeyboardVisible(true);
//     });
//     const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
//       setIsKeyboardVisible(false);
//     });

//     return () => {
//       keyboardDidShow.remove();
//       keyboardDidHide.remove();
//     };
//   }, []);

//   return { keyboardHeight, isKeyboardVisible };
// };

export default useKeyboard;
