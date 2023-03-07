// ref : https://www.npmjs.com/package/react-native-popup-dialog
import {View, Text} from 'react-native';
import React from 'react';
import Dialog, {
  SlideAnimation,
  ScaleAnimation,
  DialogContent,
  DialogTitle,
  DialogButton,
  DialogFooter,
} from 'react-native-popup-dialog';

const Popup = ({
  visible,
  width,
  content,
  title,
  closeFunction,
  closeFunctionName,
  triggerFunction,
  triggerFunctionName,
}) => {
  return (
    <Dialog
      width={width ?? 100}
      visible={visible}
      dialogTitle={<DialogTitle title={title} />}
      footer={
        <DialogFooter>
          <DialogButton
            text={closeFunctionName ?? 'CANCEL'}
            onPress={() => {
              closeFunction();
            }}
          />
          <DialogButton
            text={triggerFunctionName ?? 'OK'}
            onPress={() => {
              triggerFunction();
            }}
          />
        </DialogFooter>
      }
      //   dialogAnimation={
      //     new SlideAnimation({
      //        slideFrom: 'bottom',
      //     })
      //   }

      dialogAnimation={
        new ScaleAnimation({
          initialValue: 0, // optional
          useNativeDriver: true, // optional
        })
      }>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
};

export default Popup;
